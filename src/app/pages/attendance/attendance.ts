import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attendance',
  imports: [CommonModule],
  templateUrl: './attendance.html',
  styleUrl: './attendance.scss'
})
export class AttendanceComponent {
  students = [
    { name: 'Ahmed Ali', present: null },
    { name: 'Fatima Hassan', present: null },
    { name: 'Omar Youssef', present: null }
  ];

  markPresent(student: any) {
    student.present = true;
  }

  markAbsent(student: any) {
    student.present = false;
  }
}
