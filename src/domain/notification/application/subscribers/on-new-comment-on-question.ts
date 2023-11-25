import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository';
import { DomainEvents } from '@/core/events/domain-events';
import { EventHandler } from '@/core/events/event-handler';
import { NewCommentOnQuestionEvent } from '@/domain/forum/enterprise/events/new-comment-on-question-event';
import { SendNotificationUseCase } from '@/domain/notification/application/use-cases/send-notification';

export class OnNewCommentOnQuestion implements EventHandler {
  constructor(
    private questionsRepository: QuestionsRepository,
    private sendNotification: SendNotificationUseCase,
  ) {
    this.setupSubscriptions();
  }

  setupSubscriptions(): void {
    DomainEvents.register(
      this.sendNewCommentOnQuestionNotification.bind(this),
      NewCommentOnQuestionEvent.name,
    );
  }

  private async sendNewCommentOnQuestionNotification({
    questionId,
    questionComment,
  }: NewCommentOnQuestionEvent) {
    const question = await this.questionsRepository.findById(
      questionId.toString(),
    );

    if (question) {
      await this.sendNotification.execute({
        recipientId: question.authorId.toString(),
        title: 'There is a new comment on your question',
        content: `Someone added a new comment on your question "${question.title
          .substring(0, 20)
          .concat('...')}": "${questionComment.content}`,
      });
    }
  }
}
