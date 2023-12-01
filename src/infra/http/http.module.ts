import { Module } from '@nestjs/common';

import { CreateQuestionUseCase } from '@/domain/forum/application/use-cases/create-question';
import { FetchRecentQuestionsUseCase } from '@/domain/forum/application/use-cases/fetch-recent-questions';
import { RegisterStudentUseCase } from '@/domain/forum/application/use-cases/register-student';
import { AuthenticateStudentUseCase } from '@/domain/forum/application/use-cases/authenticate-student';
import { GetQuestionBySlugUseCase } from '@/domain/forum/application/use-cases/get-question-by-slug';
import { EditQuestionUseCase } from '@/domain/forum/application/use-cases/edit-question';
import { DeleteQuestionUseCase } from '@/domain/forum/application/use-cases/delete-question';
import { AnswerQuestionUseCase } from '@/domain/forum/application/use-cases/answer-question';
import { EditAnswerUseCase } from '@/domain/forum/application/use-cases/edit-answer';
import { DeleteAnswerUseCase } from '@/domain/forum/application/use-cases/delete-answer';
import { FetchQuestionAnswersUseCase } from '@/domain/forum/application/use-cases/fetch-question-answers';

import { GetQuestionBySlugController } from './controllers/get-question-by-slug.controller';
import { AuthenticateController } from './controllers/authenticate.controller';
import { CreateAccountController } from './controllers/create-account.controller';
import { CreateQuestionController } from './controllers/create-question.controller';
import { FetchRecentQuestionsController } from './controllers/fetch-recent-questions.controller';
import { DatabaseModule } from '../database/database.module';
import { CryptographyModule } from '../cryptography/cryptography.module';
import { EditQuestionController } from './controllers/edit-question.controller';
import { DeleteQuestionController } from './controllers/delete-question.controller';
import { AnswerQuestionController } from './controllers/answer-question.controller';
import { EditAnswerController } from './controllers/edit-answer.controller';
import { DeleteAnswerController } from './controllers/delete-answer.controller';
import { FetchQuestionAnswersController } from './controllers/fetch-question-answers.controller';

@Module({
  imports: [DatabaseModule, CryptographyModule],
  controllers: [
    AuthenticateController,
    CreateAccountController,

    CreateQuestionController,
    EditQuestionController,
    DeleteQuestionController,
    FetchRecentQuestionsController,
    GetQuestionBySlugController,

    AnswerQuestionController,
    DeleteAnswerController,
    EditAnswerController,
    FetchQuestionAnswersController,
  ],
  providers: [
    AuthenticateStudentUseCase,
    RegisterStudentUseCase,

    CreateQuestionUseCase,
    EditQuestionUseCase,
    DeleteQuestionUseCase,
    FetchRecentQuestionsUseCase,
    GetQuestionBySlugUseCase,

    AnswerQuestionUseCase,
    DeleteAnswerUseCase,
    EditAnswerUseCase,
    FetchQuestionAnswersUseCase,
  ],
})
export class HttpModule {}
