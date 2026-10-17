/**
 * Padhaaii modules as described on the site.
 * `screenshot`: path under public/ once real screenshots are added (e.g. '/screens/attendance.png').
 */
export interface ProductModule {
  id: string;
  icon: string;
  name: string;
  summary: string;
  heading: string;
  points: string[];
  screenshot: string | null;
  device: 'desktop' | 'phone';
}

export const MODULES: ProductModule[] = [
  {
    id: 'admissions',
    icon: 'admissions',
    name: 'Students & admissions',
    summary: 'Admissions pipeline, merit lists and complete student records.',
    heading: 'From enquiry to enrolment, without the paper trail',
    points: [
      'Configurable multi-stage admissions pipeline that matches your process',
      'Online application forms for parents, plus in-person entry at the office',
      'Merit lists generated from your criteria',
      'Admitted students enrolled automatically into their class and section',
      'One record per student with guardians, documents and history',
    ],
    screenshot: '/screens/admissions.webp',
    device: 'desktop',
  },
  {
    id: 'attendance',
    icon: 'attendance',
    name: 'Attendance',
    summary: 'Class attendance on mobile and biometric attendance for teachers.',
    heading: 'Attendance that takes seconds, for students and staff',
    points: [
      'Teachers mark class attendance from the mobile app',
      'Biometric attendance for teachers with eSSL devices',
      'Devices send punches straight to the cloud — no static IP or server at school',
      'Reminders for teachers who haven’t marked attendance yet',
      'Parents and students see attendance in their app',
    ],
    screenshot: '/screens/attendance.webp',
    device: 'desktop',
  },
  {
    id: 'timetable',
    icon: 'timetable',
    name: 'Timetable & substitution',
    summary: 'Auto-generated timetables and same-day substitutions.',
    heading: 'Timetables built in minutes, substitutions in one click',
    points: [
      'Subject Hours Planner to set periods per subject for every class',
      'Automatic timetable generation from your period structure and subject hours',
      'Swap or edit any slot by hand before publishing',
      'Substitution suggestions for absent teachers based on who is free',
      'Teachers see their own timetable and substitutions on mobile',
    ],
    screenshot: '/screens/timetable.webp',
    device: 'desktop',
  },
  {
    id: 'marks',
    icon: 'marks',
    name: 'Marks & report cards',
    summary: 'Exam marks entry and printable report cards.',
    heading: 'Marks entry and report cards without spreadsheets',
    points: [
      'Subject teachers enter marks for their own classes',
      'Class teachers review results for the whole class',
      'Report cards generated per student, ready to print or share',
    ],
    screenshot: '/screens/marks.webp',
    device: 'desktop',
  },
  {
    id: 'fees',
    icon: 'fees',
    name: 'Fees',
    summary: 'Cash, cheque and DD collection with sequential receipts.',
    heading: 'Fee collection that works the way your counter does',
    points: [
      'Record cash, cheque and DD payments at the fee counter',
      'Sequential receipts generated for every payment',
      'Defaulter lists by class, section or fee head',
      'Choose whether class teachers can see their students’ fee status',
    ],
    screenshot: '/screens/fees.webp',
    device: 'desktop',
  },
  {
    id: 'leave',
    icon: 'leave',
    name: 'Leave',
    summary: 'Leave requests and approvals for students and staff.',
    heading: 'Leave requests with the right approver every time',
    points: [
      'Student leave applied by parents from the app',
      'Teacher and staff leave approved by the principal or vice principal',
      'Principal and vice principal leave approved by the school admin',
      'Approved staff leave flows into attendance and substitution',
    ],
    screenshot: '/screens/leave.webp',
    device: 'desktop',
  },
  {
    id: 'visitors',
    icon: 'visitors',
    name: 'Visitor management',
    summary: 'Online appointments and a digital gate register.',
    heading: 'A gate register that knows who is expected',
    points: [
      'Parents and visitors book appointments online',
      'Walk-in registration at the gate with ID verification',
      'A digital visitor log replaces the paper register',
    ],
    screenshot: '/screens/visitors.webp',
    device: 'desktop',
  },
  {
    id: 'notifications',
    icon: 'notifications',
    name: 'Notifications',
    summary: 'Announcements, assignments and alerts on every phone.',
    heading: 'Reach every parent and teacher instantly',
    points: [
      'School-wide or class-wise announcements from the admin office',
      'Teachers send assignments and updates to their classes',
      'Push notifications on the mobile app, plus an in-app inbox',
    ],
    screenshot: '/screens/notifications.webp',
    device: 'phone',
  },
];

export const PLATFORM_POINTS = [
  { icon: 'mobile', title: 'Mobile apps', text: 'Parents and students see attendance, timetable, marks, fees and notices, with one login across siblings. Teachers get a class-teacher or subject-teacher view.' },
  { icon: 'shield', title: 'Role-based access', text: 'Admins, principals, teachers, office staff, parents and students each see only what their role allows.' },
  { icon: 'palette', title: 'Your school’s identity', text: 'Each school gets its own login address and its own logo and colours inside the portal.' },
  { icon: 'cloud', title: 'Hosted in India', text: 'School data is stored on cloud servers in Mumbai, India.' },
];
