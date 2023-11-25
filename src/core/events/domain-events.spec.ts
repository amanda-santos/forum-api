import { DomainEvent } from '../events/domain-event';
import { UniqueEntityID } from '../entities/unique-entity-id';
import { AggregateRoot } from '../entities/aggregate-root';
import { DomainEvents } from '@/core/events/domain-events';
import { vi } from 'vitest';

class CustomAggregateCreated implements DomainEvent {
  public ocurredAt: Date;
  private aggregate: CustomAggregate // eslint-disable-line

  constructor(aggregate: CustomAggregate) {
    this.aggregate = aggregate;
    this.ocurredAt = new Date();
  }

  public getAggregateId(): UniqueEntityID {
    return this.aggregate.id;
  }
}

class CustomAggregate extends AggregateRoot<null> {
  static create() {
    const aggregate = new CustomAggregate(null);

    aggregate.addDomainEvent(new CustomAggregateCreated(aggregate));

    return aggregate;
  }
}

describe('domain events', () => {
  it('should be able to dispatch and listen to events', async () => {
    const callbackSpy = vi.fn();

    // subscriber is registered and is listening to the "response created" event
    DomainEvents.register(callbackSpy, CustomAggregateCreated.name);

    // create an answer but WITHOUT saving it in the database
    const aggregate = CustomAggregate.create();

    // ensure that the event was created but NOT fired
    expect(aggregate.domainEvents).toHaveLength(1);

    // save the answer in the database and thus fire the event
    DomainEvents.dispatchEventsForAggregate(aggregate.id);

    // the subscriber listens to the event and does what needs to be done with the data
    expect(callbackSpy).toHaveBeenCalled();

    expect(aggregate.domainEvents).toHaveLength(0);
  });
});
