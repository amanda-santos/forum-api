import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { DomainEvent } from '@/core/events/domain-event';
import { AnswerComment } from '../entities/answer-comment';

export class NewCommentOnAnswerEvent implements DomainEvent {
  public ocurredAt: Date;
  public answerId: UniqueEntityID;
  public answerComment: AnswerComment;

  constructor(answerId: UniqueEntityID, answerComment: AnswerComment) {
    this.answerId = answerId;
    this.answerComment = answerComment;
    this.ocurredAt = new Date();
  }

  getAggregateId(): UniqueEntityID {
    return this.answerComment.id;
  }
}
