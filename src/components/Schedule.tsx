import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Schedule = () => {
  const days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  const currentDay = 4;

  const schedule = {
    monday: [
      { time: '08:30 - 09:15', subject: 'Математика', teacher: 'Иванова М.П.', room: '204' },
      { time: '09:25 - 10:10', subject: 'Русский язык', teacher: 'Петрова А.С.', room: '312' },
      { time: '10:20 - 11:05', subject: 'Физика', teacher: 'Сидоров К.В.', room: '105' },
      { time: '11:25 - 12:10', subject: 'История', teacher: 'Смирнова Е.Н.', room: '218' },
      { time: '12:20 - 13:05', subject: 'Английский', teacher: 'Волкова Т.И.', room: '401' },
    ],
    tuesday: [
      { time: '08:30 - 09:15', subject: 'Химия', teacher: 'Новиков П.Р.', room: '107' },
      { time: '09:25 - 10:10', subject: 'Литература', teacher: 'Петрова А.С.', room: '312' },
      { time: '10:20 - 11:05', subject: 'Алгебра', teacher: 'Иванова М.П.', room: '204' },
      { time: '11:25 - 12:10', subject: 'Физ-ра', teacher: 'Кузнецов А.А.', room: 'Спортзал' },
    ],
    wednesday: [
      { time: '08:30 - 09:15', subject: 'География', teacher: 'Морозова Л.В.', room: '315' },
      { time: '09:25 - 10:10', subject: 'Информатика', teacher: 'Белов С.М.', room: '201' },
      { time: '10:20 - 11:05', subject: 'Русский язык', teacher: 'Петрова А.С.', room: '312' },
      { time: '11:25 - 12:10', subject: 'Биология', teacher: 'Зайцева Н.К.', room: '109' },
      { time: '12:20 - 13:05', subject: 'Математика', teacher: 'Иванова М.П.', room: '204' },
    ],
    thursday: [
      { time: '08:30 - 09:15', subject: 'Английский', teacher: 'Волкова Т.И.', room: '401' },
      { time: '09:25 - 10:10', subject: 'История', teacher: 'Смирнова Е.Н.', room: '218' },
      { time: '10:20 - 11:05', subject: 'Физика', teacher: 'Сидоров К.В.', room: '105' },
      { time: '11:25 - 12:10', subject: 'Литература', teacher: 'Петрова А.С.', room: '312' },
    ],
    friday: [
      { time: '08:30 - 09:15', subject: 'Математика', teacher: 'Иванова М.П.', room: '204' },
      { time: '09:25 - 10:10', subject: 'Обществознание', teacher: 'Козлов Д.А.', room: '220' },
      { time: '10:20 - 11:05', subject: 'Химия', teacher: 'Новиков П.Р.', room: '107' },
      { time: '11:25 - 12:10', subject: 'Физ-ра', teacher: 'Кузнецов А.А.', room: 'Спортзал' },
      { time: '12:20 - 13:05', subject: 'Английский', teacher: 'Волкова Т.И.', room: '401' },
    ],
    saturday: [
      { time: '08:30 - 09:15', subject: 'ОБЖ', teacher: 'Соколов В.Н.', room: '115' },
      { time: '09:25 - 10:10', subject: 'МХК', teacher: 'Орлова Е.С.', room: '320' },
      { time: '10:20 - 11:05', subject: 'Информатика', teacher: 'Белов С.М.', room: '201' },
    ],
  };

  const dayKeys = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'] as const;
  const selectedSchedule = schedule[dayKeys[currentDay]];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Расписание занятий</h2>
          <p className="text-muted-foreground mt-1">Учебная неделя 19-24 октября 2025</p>
        </div>
        <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
          <Icon name="Download" size={18} className="mr-2" />
          Скачать PDF
        </Button>
      </div>

      <div className="flex gap-2">
        {days.map((day, index) => (
          <button
            key={day}
            className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-200 ${
              index === currentDay
                ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105'
                : 'bg-card/50 text-muted-foreground hover:bg-muted'
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      <div className="grid gap-4">
        {selectedSchedule.map((lesson, index) => (
          <Card
            key={index}
            className="p-5 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-200 animate-slide-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex items-center gap-6">
              <div className="flex-shrink-0 text-center min-w-[100px]">
                <div className="text-sm text-muted-foreground mb-1">Время</div>
                <div className="text-lg font-bold text-primary">{lesson.time}</div>
              </div>

              <div className="h-12 w-px bg-border" />

              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">{lesson.subject}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="User" size={14} />
                    <span>{lesson.teacher}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="MapPin" size={14} />
                    <span>Каб. {lesson.room}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Icon name="Bell" size={18} />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Icon name="MoreVertical" size={18} />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
            <Icon name="Info" size={24} className="text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Изменения в расписании</h3>
            <p className="text-muted-foreground">
              20 октября (Пятница) - урок математики в 08:30 переносится на 10:20. Кабинет остается прежним.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Schedule;
