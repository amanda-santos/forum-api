import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { DomainEvent } from '@/core/events/domain-event';
import { QuestionComment } from '../entities/question-comment';

export class NewCommentOnQuestionEvent implements DomainEvent {
  public ocurredAt: Date;
  public questionId: UniqueEntityID;
  public questionComment: QuestionComment;

  constructor(questionId: UniqueEntityID, questionComment: QuestionComment) {
    this.questionId = questionId;
    this.questionComment = questionComment;
    this.ocurredAt = new Date();
  }

  getAggregateId(): UniqueEntityID {
    return this.questionComment.id;
  }
}
