# SafeTest(Secure Proctoring Exam)

Project Description 

What We Did
We built an intelligent web-based exam portal that acts as an automated digital supervisor. It monitors student behavior in real-time to prevent cheating during online tests without needing a human watcher.

Technologies & Coding Languages Used:

     Frontend: React.js, JavaScript, HTML5, CSS3

AI Engine: 

    TensorFlow.js and the BlazeFace model (for facial tracking inside the browser)

Backend & Storage: 

    Node.js, Express, Axios (running on Port 3307), and browser localStorage for fallback data saving.

Core Features:

AI Face Monitoring: Detects if the student moves away from the screen, covers the camera, or if multiple people enter the room.

Browser Lockdown: Enforces automatic full-screen mode and blocks tab switching, window minimizing, and copy-paste shortcuts.

Integrity Score & Automated Submissions: Students start with a 100% score. Every violation deducts points and captures a photo snapshot. Reaching 3 violations triggers an immediate automatic submission.

Live Instructor Dashboard: A PIN-protected screen where teachers can view live exam logs, scores, and photographic proof of violations.



How It Works (Step-by-Step):

Identity Verification: The student enters their name and ID. The camera turns on, checks for a clear environment, and a voice reads out the exam rules.

Lockdown Activation: The exam launches into full-screen mode, and security event listeners activate to track mouse and keyboard inputs.

Real-Time Scanning: Every 1.5 seconds, the AI checks the webcam video to verify the student's presence, while the system checks if the user is still focused on the test.

Automatic Enforcement: If a violation occurs, the system docks points, logs the event, and snaps a photo. If 3 strikes are hit, the test locks out and auto-submits.

Teacher Review: All grades, answers, and violation snapshots are instantly synced to the database for the teacher to audit.


Project Output


<img width="1873" height="1001" alt="Screenshot 2026-05-28 153940" src="https://github.com/user-attachments/assets/f9025447-7864-4866-80a0-4a27ff1a7ebd" />
<img width="1873" height="992" alt="Screenshot 2026-05-28 154341" src="https://github.com/user-attachments/assets/7e36c611-65b4-4e6d-b35e-bdbbdc201d32" />
<img width="1881" height="999" alt="Screenshot 2026-05-28 154549" src="https://github.com/user-attachments/assets/41fd8256-71d2-47db-b357-2f924616fdde" />
<img width="1888" height="1172" alt="Screenshot 2026-05-22 214014" src="https://github.com/user-attachments/assets/4f50d8e7-6417-43f7-b422-c34ca521e183" />
<img width="1881" height="1150" alt="Screenshot 2026-05-28 155033" src="https://github.com/user-attachments/assets/6dfc3215-aba7-47e1-a489-e9a709dc01ed" />
<img width="1885" height="1018" alt="Screenshot 2026-05-22 214833" src="https://github.com/user-attachments/assets/c36a3bde-5a33-4612-bb48-698396591927" />
<img width="1867" height="1012" alt="Screenshot 2026-05-22 214627" src="https://github.com/user-attachments/assets/7dd25a28-4772-43f3-81b7-c717bf4af133" />
<img width="1858" height="997" alt="Screenshot 2026-05-28 154805" src="https://github.com/user-attachments/assets/7f4957e4-4326-461f-bfd9-69fef93712d8" />
<img width="1875" height="994" alt="Screenshot 2026-05-28 154055" src="https://github.com/user-attachments/assets/19ba5ed9-ddc9-4b47-99d2-55e720615d64" />
<img width="1878" height="1005" alt="Screenshot 2026-05-28 155309" src="https://github.com/user-attachments/assets/46b96488-d176-4da1-b8b3-8fae86701e86" />
<img width="1874" height="992" alt="Screenshot 2026-05-28 155407" src="https://github.com/user-attachments/assets/2a7c60c0-d250-4f44-8fdb-ff994576bd04" />
<img width="1862" height="978" alt="Screenshot 2026-05-28 155343" src="https://github.com/user-attachments/assets/d3cfc5c7-ea35-4110-952d-8fe9db081659" />
