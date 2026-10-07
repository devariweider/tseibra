import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  gradeQuizAttempt,
  getCurriculum,
  getLessonById,
  validateCurriculum,
} from '@tseibra/content';

describe('conteúdo curricular', () => {
  it('não possui inconsistências estruturais', () => {
    const errors = validateCurriculum().filter((issue) => issue.severity === 'erro');
    assert.deepEqual(errors, [], `erros de conteúdo: ${JSON.stringify(errors)}`);
  });

  it('expõe módulos, aulas e totais coerentes', () => {
    const { modules, totals } = getCurriculum();
    assert.ok(modules.length >= 7, 'a trilha deve ter pelo menos 7 módulos');
    assert.equal(totals.modules, modules.length);
    assert.equal(totals.questions, modules.reduce((sum, module) => sum + module.questionCount, 0));
    assert.equal(totals.lessons, modules.reduce((sum, module) => sum + module.lessonCount, 0));
    assert.ok(totals.lessons > 0);
  });

  it('resolve aulas por id', () => {
    const { modules } = getCurriculum();
    const firstLesson = modules[0]?.lessons[0];
    assert.ok(firstLesson, 'a primeira aula deve existir');
    const ref = getLessonById(firstLesson.id);
    assert.equal(ref?.lesson.id, firstLesson.id);
    assert.equal(ref?.module.id, modules[0]?.id);
  });

  it('devolve null para aula inexistente', () => {
    assert.equal(getLessonById('nao-existe'), null);
  });
});

describe('correção de quiz', () => {
  const lessonId = getCurriculum().modules[0]?.lessons[0]?.id ?? '';
  const lesson = getLessonById(lessonId)?.lesson;

  it('aprova com 100% de acertos', () => {
    const answers = Object.fromEntries(lesson?.quiz.map((q) => [q.id, q.correctIndex]) ?? []);
    const result = gradeQuizAttempt(lessonId, answers);
    assert.ok(result);
    assert.equal(result.score, 100);
    assert.equal(result.passed, true);
    assert.equal(result.answers.length, lesson?.quiz.length);
  });

  it('reprova com 0% de acertos', () => {
    const answers = Object.fromEntries(
      lesson?.quiz.map((q) => [q.id, (q.correctIndex + 1) % q.options.length]) ?? [],
    );
    const result = gradeQuizAttempt(lessonId, answers);
    assert.ok(result);
    assert.equal(result.score, 0);
    assert.equal(result.passed, false);
  });

  it('trata questões sem resposta como erradas', () => {
    const result = gradeQuizAttempt(lessonId, {});
    assert.ok(result);
    assert.equal(result.score, 0);
    assert.ok(result.answers.every((answer) => answer.selectedIndex === null));
  });

  it('retorna null para aula inexistente', () => {
    assert.equal(gradeQuizAttempt('inexistente', {}), null);
  });

  it('usa nota de corte de 70%', () => {
    assert.equal(gradeQuizAttempt(lessonId, {})?.passThreshold, 70);
  });
});