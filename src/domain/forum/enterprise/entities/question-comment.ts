import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { Optional } from '@/core/types/optional';
import { Comment, CommentProps } from './comment';
import { NewCommentOnQuestionEvent } from '../events/new-comment-on-question-event';

export interface QuestionCommentProps extends CommentProps {
  questionId: UniqueEntityID;
}

export class QuestionComment extends Comment<QuestionCommentProps> {
  get questionId() {
    return this.props.questionId;
  }

  static create(
    props: Optional<QuestionCommentProps, 'createdAt'>,
    id?: UniqueEntityID,
  ) {
    const questionComment = new QuestionComment(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    );

    const isNewComment = !id;

    if (isNewComment) {
      questionComment.addDomainEvent(
        new NewCommentOnQuestionEvent(props.questionId, questionComment),
      );
    }

    return questionComment;
  }
}
