import { AnswersRepository } from '@/domain/forum/application/repositories/answers-repository';
import { DomainEvents } from '@/core/events/domain-events';
import { EventHandler } from '@/core/events/event-handler';
import { NewCommentOnAnswerEvent } from '@/domain/forum/enterprise/events/new-comment-on-answer-event';
import { SendNotificationUseCase } from '@/domain/notification/application/use-cases/send-notification';

export class OnNewCommentOnAnswer implements EventHandler {
  constructor(
    private answersRepository: AnswersRepository,
    private sendNotification: SendNotificationUseCase,
  ) {
    this.setupSubscriptions();
  }

  setupSubscriptions(): void {
    DomainEvents.register(
      this.sendNewCommentOnAnswerNotification.bind(this),
      NewCommentOnAnswerEvent.name,
    );
  }

  private async sendNewCommentOnAnswerNotification({
    answerId,
    answerComment,
  }: NewCommentOnAnswerEvent) {
    const answer = await this.answersRepository.findById(answerId.toString());

    if (answer) {
      await this.sendNotification.execute({
        recipientId: answer.authorId.toString(),
        title: 'There is a new comment on your answer',
        content: `Someone added a new comment on your answer "${answer.content
          .substring(0, 20)
          .concat('...')}": "${answerComment.content}`,
      });
    }
  }
}
