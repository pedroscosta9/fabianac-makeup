import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

export interface CalDay {
  day: number | null;
  isToday: boolean;
  isBooked: boolean;
  isPast: boolean;
}

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent implements OnInit {

  private readonly EMAILJS_SERVICE  = 'service_fdxdfie';
  private readonly EMAILJS_TEMPLATE = 'template_zzot60t';
  private readonly EMAILJS_KEY      = 'ztTHX8W4h7xpVhaa8';

  private bookedDays: number[] = [];

  currentDate = new Date();
  displayDate = new Date();
  calDays: CalDay[] = [];
  dayNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  features = [
    'Confirmação em menos de 24h',
    'Deslocação a domicílio disponível'
  ];

  showModal = false;
  showConfirmation = false;
  isSending = false;
  errorMessage = '';
  selectedDay: number | null = null;
  form = { name: '', phone: '', message: '', hour: '', contact: '' };

  get monthLabel(): string {
    return this.displayDate.toLocaleDateString('pt-PT', { month: 'long', year: 'numeric' })
      .replace(/^\w/, c => c.toUpperCase());
  }

  get selectedDateLabel(): string {
    if (!this.selectedDay) return '';
    const d = new Date(this.displayDate.getFullYear(), this.displayDate.getMonth(), this.selectedDay);
    const weekday = d.toLocaleDateString('pt-PT', { weekday: 'long' });
    const month = d.toLocaleDateString('pt-PT', { month: 'long' });
    return `${weekday.charAt(0).toUpperCase() + weekday.slice(1)}, ${this.selectedDay} de ${month} de ${d.getFullYear()}`;
  }

  ngOnInit() {
    this.buildCalendar();
  }

  buildCalendar() {
    const year = this.displayDate.getFullYear();
    const month = this.displayDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();
    const today = this.currentDate;

    this.calDays = [];

    for (let i = 0; i < firstDay; i++) {
      this.calDays.push({ day: null, isToday: false, isBooked: false, isPast: false });
    }

    for (let d = 1; d <= totalDays; d++) {
      const cellDate = new Date(year, month, d);
      const isToday = d === today.getDate() && month === today.getMonth() && year === today.getFullYear();
      const isPast = cellDate < new Date(today.getFullYear(), today.getMonth(), today.getDate());

      this.calDays.push({
        day: d,
        isToday,
        isBooked: this.bookedDays.includes(d),
        isPast
      });
    }
  }

  prevMonth() {
    this.displayDate = new Date(this.displayDate.getFullYear(), this.displayDate.getMonth() - 1, 1);
    this.buildCalendar();
  }

  nextMonth() {
    this.displayDate = new Date(this.displayDate.getFullYear(), this.displayDate.getMonth() + 1, 1);
    this.buildCalendar();
  }

  onDayClick(cell: CalDay) {
    if (!cell.day || cell.isBooked || cell.isPast) return;
    this.selectedDay = cell.day;
    this.form = { name: '', phone: '', message: '', hour: '', contact: '' };
    this.showConfirmation = false;
    this.errorMessage = '';
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.showConfirmation = false;
    this.selectedDay = null;
    this.errorMessage = '';
  }

  async sendBooking() {
    if (!this.form.name.trim() || !this.form.phone.trim()) return;

    this.isSending = true;
    this.errorMessage = '';

    try {
      await emailjs.send(
        this.EMAILJS_SERVICE,
        this.EMAILJS_TEMPLATE,
        {
          client_name: this.form.name,
          client_phone: this.form.phone,
          date: this.selectedDateLabel,
          hour: this.form.hour || 'Sem preferência',
          contact_preference: this.form.contact || 'Sem preferência',
          message: this.form.message || 'Sem mensagem adicional'
        },
        this.EMAILJS_KEY
      );
      this.showConfirmation = true;
   } catch (error) {
  console.log('EmailJS error:', error);
  this.errorMessage = 'Ocorreu um erro ao enviar. Por favor tenta novamente.';
} finally {
      this.isSending = false;
    }
  }
}