export const profile = {
  name: "Sam Shoni",
  role: "Robotics R&D Engineer",
  focus: "Dual-Arm Manipulation · Real-Time Control · Autonomous Systems",
  location: "Kerala, India",
  email: "samshoni10@gmail.com",
  phone: "+91 94954 30364",
  github: "https://github.com/samshoni",
  linkedin: "https://linkedin.com/in/sam-shoni-7b2b94301",
  resumeUrl: "/Sam-Shoni-Resume.pdf",
  photo: "/profile.jpg",
  summary:
    "B.Tech graduate in Robotics & Automation Engineering with hands-on expertise in humanoid dual-arm manipulation, autonomous mobile robots, and edge AI. I build end-to-end ROS 2 pipelines — from hardware bring-up to full autonomous navigation — on real platforms including a custom humanoid upper body, UR10, custom differential-drive robots, and NVIDIA Jetson AGX.",
};

export const stats = [
  { label: "Years building robots", value: "4+" },
  { label: "GitHub repositories", value: "58" },
  { label: "Patent published", value: "1" },
  { label: "Real hardware platforms", value: "6" },
];

export type Experience = {
  role: string;
  org: string;
  location: string;
  period: string;
  current?: boolean;
  points: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    role: "Robotics Research & Development Engineer (Contract)",
    org: "DRDO – R&D(E)",
    location: "Pune",
    period: "Jul 2026 – Present",
    current: true,
    points: [
      "Perception-driven robotic manipulation research, including 6-DOF object localization by fusing LiDAR and depth sensor data.",
      "Developing and testing dual-arm coordinated control on a custom humanoid upper-body platform, including real-time motion scripting and pick-and-place execution.",
      "Diagnosing and resolving real-time control issues (latency, jitter, timing drift) on EtherCAT-based hardware using distributed clock synchronization and PREEMPT-RT scheduling.",
    ],
    tags: ["EtherCAT", "PREEMPT-RT", "Dual-Arm Control", "Sensor Fusion"],
  },
  {
    role: "Intern — Perception-driven Robotic Manipulation",
    org: "DRDO – R&D(E)",
    location: "Pune",
    period: "Jan 2026 – Jun 2026 · 6 months",
    points: [
      "Researched 6-DOF object localization using fused LiDAR and depth sensor data for precise robotic manipulation.",
      "Developed perception algorithms to enable autonomous grasping in unstructured environments.",
      "Implemented sensor fusion techniques to improve spatial awareness and localization accuracy.",
    ],
    tags: ["LiDAR", "Depth Sensing", "Grasping", "Perception"],
  },
  {
    role: "Intern — ROS 2 Humble, SLAM, Nav2, URDF",
    org: "I HUB Robotics",
    location: "Kochi",
    period: "Jan 2026",
    points: [
      "Hands-on training on ROS 2 Humble: workspace setup, nodes, topics, and package structuring.",
      "Modeled robots with URDF/Xacro and integrated them with Gazebo and RViz for Nav2 stack testing.",
    ],
    tags: ["ROS 2", "URDF/Xacro", "Nav2"],
  },
  {
    role: "Trainee — Industrial Robotics Training",
    org: "PSG College of Technology",
    location: "Coimbatore",
    period: "FANUC Industrial Robots",
    points: [
      "Trained on FANUC industrial robots: teaching pendant operation, coordinate frames, and motion programming.",
      "Executed pick-and-place and safe manipulator operations on real industrial robots.",
    ],
    tags: ["FANUC", "Industrial Robotics"],
  },
];

export type Project = {
  title: string;
  period?: string;
  description: string;
  points: string[];
  tags: string[];
  featured?: boolean;
  link?: string;
};

export const projects: Project[] = [
  {
    title: "Custom Humanoid Robot — Dual-Arm Manipulation & Real-Time Motion Control",
    description:
      "Hands-on control of a custom dual-arm humanoid upper body, from EtherCAT real-time tuning to coordinated pick-and-place scripting.",
    points: [
      "Wrote custom Python scripts to command dual-arm motion, including a dedicated pick-and-place routine for coordinated dual-arm operation.",
      "Diagnosed real-time performance issues — latency, jitter, and timing delay — in the EtherCAT-based control loop.",
      "Resolved these by enabling distributed clock synchronization and applying PREEMPT-RT scheduling, tuning the control cycle time from 750 µs to 1000 µs (1 ms) for stable, repeatable performance.",
      "Analyzed EtherCAT data flow and visualized torque, current spikes, and voltage in PlotJuggler to validate motion performance and catch anomalies.",
      "Simulated the humanoid in Gazebo to build and test autonomous pick-and-place pipelines before deployment on hardware.",
    ],
    tags: ["ROS 2", "Python", "EtherCAT", "PREEMPT-RT", "PlotJuggler", "Gazebo"],
    featured: true,
  },
  {
    title: "Autonomous Mobile Robot — Full-Stack SLAM, Sensor Fusion & Nav2 Navigation",
    description:
      "A custom differential-drive robot built from scratch on Raspberry Pi — no wheel encoders — navigating indoors fully autonomously.",
    points: [
      "Integrated a 360° LiDAR (10 Hz), MPU6050 IMU, and L298N motor driver with no wheel encoders.",
      "Implemented laser-scan-matching odometry (rf2o) fused with IMU angular velocity via a Madgwick filter and EKF (robot_localization), eliminating rotational drift.",
      "Built real-time 2D occupancy maps using SLAM Toolbox (online async); deployed AMCL for localization on saved maps.",
      "Tuned and deployed the full Nav2 stack — Smac Planner 2D and Regulated Pure Pursuit — with hand-tuned costmap, velocity, and collision parameters.",
      "Engineered a custom Behavior Tree enabling proactive 1 Hz obstacle rerouting and backup-only recovery without in-place rotation, preserving laser odometry integrity.",
    ],
    tags: ["ROS 2 Humble", "Nav2", "SLAM Toolbox", "EKF", "Raspberry Pi", "rf2o"],
    featured: true,
  },
  {
    title: "Vision-Guided Pick & Place — UR10 & MoveIt 2",
    description:
      "A real UR10 arm performing perception-driven pick-and-place, calibrated and validated on physical hardware.",
    points: [
      "Engineered an autonomous pipeline for a real UR10 arm to perform pick-and-place via a Jetson AGX.",
      "Performed ArUco marker-based hand-eye calibration, computing a static TF between camera and end-effector.",
      "Verified transform accuracy by physically measuring camera/base offsets and camera height.",
      "Used the validated TF for perception-driven manipulation via an object-detection node.",
    ],
    tags: ["ROS 2", "OpenCV", "MoveIt 2", "Jetson AGX", "Hand-Eye Calibration"],
    featured: true,
  },
  {
    title: "Voice-Controlled Pick & Place — UR10 & Robotiq Gripper",
    description:
      "Hands-free control of a UR10 + Robotiq gripper using fully offline speech recognition.",
    points: [
      "Integrated the VOSK speech-to-text library for real-time, offline audio processing, mapping spoken commands to precise robotic trajectories.",
      "Deployed on a Jetson AGX Orin, optimizing for low-latency edge computing.",
      "Engineered a closed-loop feedback mechanism to confirm command execution and system status, improving safety.",
    ],
    tags: ["ROS 2", "VOSK", "Jetson AGX Orin", "Robotiq"],
  },
  {
    title: "Adaptive Driver-Focus System",
    description:
      "A real-time drowsiness detection system — published as a patent with the Indian Patent Office.",
    points: [
      "Real-time driver monitoring using facial landmark detection to track Eye Aspect Ratio (EAR) and blink rate.",
      "Triggered real-time alerts using a lightweight OpenCV pipeline suitable for embedded deployment.",
    ],
    tags: ["Python", "OpenCV", "Patent Published"],
    featured: true,
  },
  {
    title: "Real-Time Safety Helmet Detection",
    description: "A YOLOv8 model trained and deployed for workplace safety monitoring at the edge.",
    points: [
      "Trained a YOLOv8 model for workplace safety monitoring and deployed it on Jetson AGX for high-FPS edge inference.",
      "Managed the full ML lifecycle: dataset preparation, transfer learning, and CUDA-optimized deployment.",
    ],
    tags: ["YOLOv8", "RTX 4050", "Jetson AGX"],
  },
  {
    title: "Spatial AI & Room Mapping Pipeline",
    description: "Real-time 3D room mapping and obstacle localization using an OAK-D Pro RGB-D camera.",
    points: [
      "Integrated an OAK-D Pro RGB-D camera with RTAB-Map on ROS 2 to generate a real-time 3D map using visual odometry.",
      "Leveraged DepthAI on-device AI to identify and spatially locate obstacles (chair, table, person).",
    ],
    tags: ["OAK-D Pro", "RTAB-Map", "ROS 2", "DepthAI"],
  },
];

export const skills = [
  {
    category: "Core Robotics",
    items: ["ROS 2 Humble", "MoveIt 2", "Nav2", "SLAM Toolbox", "EKF", "Gazebo", "RViz"],
  },
  {
    category: "Hardware Platforms",
    items: [
      "Custom Humanoid Upper Body",
      "UR10 (CB-Series)",
      "NVIDIA Jetson AGX / Nano",
      "OAK-D Pro",
      "Intel RealSense",
      "Raspberry Pi",
      "YDLidar X2",
      "IMU / EtherCAT",
    ],
  },
  {
    category: "Programming",
    items: ["Python", "C/C++", "Arduino C", "Linux / Shell", "Git", "VS Code"],
  },
  {
    category: "Perception & AI",
    items: ["OpenCV", "YOLOv8", "MediaPipe", "DepthAI", "Sensor Fusion"],
  },
];

export const certifications = [
  {
    title: "Patent Published — Indian Patent Office",
    detail: "Adaptive Driver-Focus System — real-time drowsiness detection.",
  },
  { title: "NPTEL Certificate", detail: "Mechanics of Solids." },
  { title: "FANUC Industrial Robotics Certificate", detail: "PSG College of Technology, 1-week hands-on training." },
  { title: "IEEE Student Member", detail: "Participated in an IEEE hackathon at Sahrdaya College." },
  {
    title: "Guest Speaker, ISTE SC RIT",
    detail: '"RAI Technical Round Prep" session under PLACE-X, ISTE Student Chapter, RIT Kottayam.',
  },
  { title: "Project Exhibition", detail: "Presented 6-DOF robotic arm at GEC Barton Hill." },
];

export const education = {
  school: "Saintgits College of Engineering (Autonomous)",
  location: "Kerala, India",
  degree: "B.Tech in Robotics and Automation Engineering",
  period: "2022 – 2026",
  cgpa: "7.5 / 10",
};
