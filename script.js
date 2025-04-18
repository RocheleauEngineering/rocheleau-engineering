const projects = [
  {
    id: 1,
    title: "Thermal Optimization of Mini Fridge Using CFD",
    description: `
    <div style='text-align: left;'>
  <strong>Context:</strong> Mini fridges using thermoelectric cooling often suffer from low efficiency due to thermal design limitations, reducing their practical performance and energy efficiency.<br><br>

  <strong>Objective:</strong> Reverse engineer and improve the thermal performance of a commercial mini fridge by optimizing the heat sink and cold block geometry through simulation.<br><br>

  <strong>Your Role and Contribution:</strong><br>
  <em>Responsibilities:</em> Led the thermal simulation and redesign using SolidWorks and Simcenter Star-CCM+. Conducted comparative studies of various heat sink geometries and cold side contact strategies.<br>
  <em>Tools and Technologies:</em> SolidWorks Simulation, Simcenter Star-CCM+, MATLAB, parametric CAD modeling.<br>
  <em>Problem-Solving:</em> Used CFD and CAD to explore alternative fin geometries. Increased surface area and optimized heat dissipation paths while keeping manufacturing complexity low.<br><br>

  <strong>Project Details and Results:</strong><br>
  <em>Challenges:</em> The original system had inefficient heat transfer on both cold and hot sides, limiting cooling capacity and COP.<br>
  <em>Solutions:</em> Used CFD and CAD to explore alternative fin geometries. Increased surface area and optimized heat dissipation paths while keeping manufacturing complexity low.<br>
  <em>Outcomes:</em> Improved coefficient of performance (COP) by 53% with only a 9.9% increase in cost. Reduced internal cold block temperature by 4.3°C.<br>
  <em>Lessons Learned:</em> Validated the power of simulation-led design for low-cost thermal systems. Future work could incorporate experimental validation and advanced multi-physics models.
</div>

    `,
    images: ["images/Thermal-1.png", "images/Thermal-2.png", "images/Thermal-3.png", "images/Thermal-4.png", "images/Thermal-5.png", "images/Thermal-6.png", "images/Thermal-7.png", "images/Thermal-8.png"]
  },
  {
    id: 2,
    title: "Design and Development of a VTOL SAR Drone",
    description: `
      <div style='text-align: left;'>
        <strong>Context:</strong> Remote and mountainous areas in British Columbia require affordable, long-endurance aerial tools for search and rescue operations where traditional helicopters or commercial drones are cost-prohibitive.<br><br>
        
        <strong>Objective:</strong> Develop a lightweight vertical takeoff and landing (VTOL) drone capable of 90-minute flights for scanning large terrains in SAR missions.<br><br>
        
        <strong>Your Role and Contribution:</strong><br>
        <em>Responsibilities:</em> Led subsystem integration, electrical layout, and propulsion modeling. Supported CAD design, power budgeting, and testing of avionics and motor systems.<br>
        <em>Tools and Technologies:</em> SolidWorks, ArduPilot, Pixhawk 6X, MATLAB, FEA, CNC tools.<br>
        <em>Problem-Solving:</em> Selected a tail-sitter airframe to reduce complexity and drag. Optimized battery and ESC configuration to maximize endurance.<br><br>
        
        <strong>Project Details and Results:</strong><br>
        <em>Challenges:</em> Balancing endurance, cost, and weight while ensuring flight stability under variable terrain and wind conditions.<br>
        <em>Solutions:</em> Selected a tail-sitter airframe to reduce complexity and drag. Optimized battery and ESC configuration to maximize endurance.<br>
        <em>Outcomes:</em> Produced a 4.7 kg prototype with 1.2 m wingspan. Achieved over 60% energy savings in cruise mode and reduced expected cost by 70% compared to commercial equivalents.<br>
        <em>Lessons Learned:</em> Electrical diagnostics and avionics integration are critical for early-stage UAV testing. ESC signal tracing was key to recovering from component failure.
      </div>
    `,
    images: ["images/VTOL-1.png", "images/VTOL-2.png", "images/VTOL-3.png"]
  },
  {
    id: 3,
    title: "Performance Evaluation of Ammonia Fuel Cells",
    description: `
      <div style='text-align: left;'>
        <strong>Context:</strong> Ammonia is a promising hydrogen carrier, and direct ammonia-fed fuel cells (DAFCs) could play a key role in low-carbon energy. Performance and scalability remain barriers.<br><br>
        
        <strong>Objective:</strong> Evaluate DAFC performance based on membrane thickness and catalyst choice, focusing on efficiency, cost, and crossover control.<br><br>
        
        <strong>Your Role and Contribution:</strong><br>
        <em>Responsibilities:</em> Led comparative analysis of membrane and catalyst configurations. Interpreted performance metrics and designed optimization recommendations.<br>
        <em>Tools and Technologies:</em> Electrochemical modeling, technical literature, material comparison, MATLAB.<br>
        <em>Problem-Solving:</em> Analyzed bimetallic and non-precious catalysts, especially NiFe. Simulated membrane thickness effects on crossover and efficiency.<br><br>
        
        <strong>Project Details and Results:</strong><br>
        <em>Challenges:</em> Limited experimental data and high catalyst costs hinder practical adoption.<br>
        <em>Solutions:</em> Analyzed bimetallic and non-precious catalysts, especially NiFe. Simulated membrane thickness effects on crossover and efficiency.<br>
        <em>Outcomes:</em> Identified a 28% power gain with thinner membranes. Proposed 40% cost reductions via alternative membrane and catalyst options.<br>
        <em>Lessons Learned:</em> Trade-offs between material durability and performance are central to fuel cell design. Multi-variable optimization tools are key to system-level insights.
      </div>
    `,
    images: ["images/Ammonia-1.png", "images/Ammonia-2.png", "images/Ammonia-3.png", "images/Ammonia-4.png"]
  },
  
  {
    id: 4,
    title: "Design and Analysis of Planetary Gearbox for Ferris Wheel",
    description: `
      <div style='text-align: left;'>
        <strong>Context:</strong> Amusement ride systems require long-lasting and safe mechanical components, especially in child-centric applications like Ferris wheels.<br><br>
        
        <strong>Objective:</strong> Design a three-stage planetary gearbox for a small Ferris wheel capable of 20+ years of operation under cyclic loads.<br><br>
        
        <strong>Your Role and Contribution:</strong><br>
        <em>Responsibilities:</em> Led failure analysis, gear and shaft sizing, bearing selection, and CAD model development.<br>
        <em>Tools and Technologies:</em> SolidWorks, AGMA standards, fatigue analysis, FEA tools.<br>
        <em>Problem-Solving:</em> Optimized gear ratios and conducted fatigue simulations to ensure safety factors > 3.0. Sized bearings for 20-year L10 life.<br><br>
        
        <strong>Project Details and Results:</strong><br>
        <em>Challenges:</em> Maintaining structural integrity and reliability while minimizing size and maintenance requirements.<br>
        <em>Solutions:</em> Optimized gear ratios and conducted fatigue simulations to ensure safety factors > 3.0. Sized bearings for 20-year L10 life.<br>
        <em>Outcomes:</em> Complete CAD model and gear assembly documentation validated for long-term use with minimal maintenance.<br>
        <em>Lessons Learned:</em> Fatigue and failure analysis are essential for rotating systems. Upfront safety margin planning leads to durable design.
      </div>
    `,
    images: ["images/Gearbox-1.png", "images/Gearbox-2.png", "images/Gearbox-3.png", "images/Gearbox-4.png", "images/Gearbox-5.png", "images/Gearbox-6.png", "images/Gearbox-7.png"]
  },
  {
    id: 5,
    title: "Design and Prototyping of MARV-1N: Mine Detection Robot",
    description: `
      <div style='text-align: left;'>
        <strong>Context:</strong> Millions of unexploded landmines worldwide pose a safety threat, especially in post-conflict areas.<br><br>
        
        <strong>Objective:</strong> Develop a lightweight, manually deployable robot capable of triggering buried landmines via mechanical impact.<br><br>
        
        <strong>Your Role and Contribution:</strong><br>
        <em>Responsibilities:</em> Contributed to spring impactor system, chassis layout, and Arduino controller integration. Led recoil damping design.<br>
        <em>Tools and Technologies:</em> SolidWorks, Arduino, 3D printing, laser cutting, impact simulations.<br>
        <em>Problem-Solving:</em> Used spring analysis and mechanical locking mechanisms to isolate and direct the impact force. Validated with simulated mines.<br><br>
        
        <strong>Project Details and Results:</strong><br>
        <em>Challenges:</em> Ensuring consistent impact force without damaging the robot or its surroundings.<br>
        <em>Solutions:</em> Used spring analysis and mechanical locking mechanisms to isolate and direct the impact force. Validated with simulated mines.<br>
        <em>Outcomes:</em> Built a field-resettable robot with full mobility and impact triggering capabilities. Triggered 100% of test mines in trials.<br>
        <em>Lessons Learned:</em> Mechanical triggering systems can be designed with high precision using simple materials and good system integration.
      </div>
    `,
    images: ["images/MARV-1N-1.png", "images/MARV-1N-2.png", "images/MARV-1N-3.png", "images/MARV-1N-4.png", "images/MARV-1N-5.png", "images/MARV-1N-6.png"]
  },
  
  {
    id: 6,
    title: "Design and Deployment of Multibeam Sonar System",
    description: `
      <div style='text-align: left;'>
        <strong>Context:</strong> Ocean Networks Canada needed a rugged and precise deployment system to support Arctic seabed mapping.<br><br>
        
        <strong>Objective:</strong> Design a corrosion-resistant structure to house and deploy multibeam sonar systems in freezing, high-pressure marine environments.<br><br>
        
        <strong>Your Role and Contribution:</strong><br>
        <em>Responsibilities:</em> Led structural and materials design, conducted FEA stress testing and fabrication planning.<br>
        <em>Tools and Technologies:</em> SolidWorks, FEA, marine-grade materials, CNC machining.<br>
        <em>Problem-Solving:</em> Simulated ice and wave impact loads using FEA and selected cold-resistant metals and coatings.<br><br>
        
        <strong>Project Details and Results:</strong><br>
        <em>Challenges:</em> Ensuring structural integrity during transport, deployment, and extreme Arctic conditions.<br>
        <em>Solutions:</em> Simulated ice and wave impact loads using FEA and selected cold-resistant metals and coatings.<br>
        <em>Outcomes:</em> System operated without failure during multiple deployments in sub-zero conditions, maintaining accurate sonar readings.<br>
        <em>Lessons Learned:</em> Extreme climate engineering requires redundancy in materials and impact modeling.
      </div>
    `,
    images: ["images/Multibeam-1.png", "images/Multibeam-2.png", "images/Multibeam-3.png", "images/Multibeam-4.png", "images/Multibeam-5.png", "images/Multibeam-6.png"]
  },
  
  {
    id: 7,
    title: "Design of Mooring System for Antarctic Deployment",
    description: `
      <div style='text-align: left;'>
        <strong>Context:</strong> Ocean Networks Canada required a mooring system for multi-year data collection in icy Antarctic waters.<br><br>
  
        <strong>Objective:</strong> Develop a reliable underwater anchoring system that can withstand currents, ice shifts, and biofouling.<br><br>
  
        <strong>Your Role and Contribution:</strong><br>
        <em>Responsibilities:</em> Led design of mooring anchors, tension control elements, and long-term corrosion protection.<br>
        <em>Tools and Technologies:</em> SolidWorks, FEA, materials testing, marine-grade fasteners.<br>
        <em>Problem-Solving:</em> Simulated drag and wave forces; tested metal and synthetic cable configurations for fatigue and chemical resistance.<br><br>
  
        <strong>Project Details and Results:</strong><br>
        <em>Challenges:</em> Designing a mooring system with long service life under continuous load and sub-zero temperatures.<br>
        <em>Solutions:</em> Simulated drag and wave forces; tested metal and synthetic cable configurations for fatigue and chemical resistance.<br>
        <em>Outcomes:</em> Maintained 98% uptime over a 2-year deployment, with zero structural failures and minimal biofouling interference.<br>
        <em>Lessons Learned:</em> Deployment longevity depends heavily on early material selection and dynamic force modeling.
      </div>
    `,
    images: ["images/Mooring-1.png", "images/Mooring-2.png", "images/Mooring-3.png"]
  },
  {
    id: 8,
    title: "Design and Fabrication of Protective Winch Cover",
    description: `
      <div style='text-align: left;'>
        <strong>Context:</strong> Winch systems on research vessels need environmental protection to extend service life and reduce maintenance.<br><br>
  
        <strong>Objective:</strong> Design a protective cover that guards against UV, saltwater, and debris while remaining easy to install and remove.<br><br>
  
        <strong>Your Role and Contribution:</strong><br>
        <em>Responsibilities:</em> Designed mounting interface, selected UV-resistant materials, and led CNC fabrication.<br>
        <em>Tools and Technologies:</em> SolidWorks, CNC router, marine-grade coatings.<br>
        <em>Problem-Solving:</em> Used snap-lock features and modular assembly with coated frame supports.<br><br>
  
        <strong>Project Details and Results:</strong><br>
        <em>Challenges:</em> Ensuring strong weather resistance while maintaining portability and tool-free access.<br>
        <em>Solutions:</em> Used snap-lock features and modular assembly with coated frame supports.<br>
        <em>Outcomes:</em> Reduced field maintenance frequency by 30% and extended winch surface lifespan by 2 years.<br>
        <em>Lessons Learned:</em> Simple protective elements can significantly enhance equipment reliability in harsh marine settings.
      </div>
    `,
    images: ["images/winch-1.png"]
  },
  
  {
    id: 9,
    title: "Design of High-Pressure Instrument Housing",
    description: `
      <div style='text-align: left;'>
        <strong>Context:</strong> AML Oceanographic required a pressure-resistant case to protect sensors at ocean depths up to 10,000 psi.<br><br>
  
        <strong>Objective:</strong> Design a deep-sea housing with tight tolerances, robust sealing, and resistance to corrosion and pressure failure.<br><br>
  
        <strong>Your Role and Contribution:</strong><br>
        <em>Responsibilities:</em> Led FEA modeling and design of body/seal geometry. Oversaw material sourcing and precision machining.<br>
        <em>Tools and Technologies:</em> SolidWorks, FEA, CNC, marine-grade stainless steel.<br>
        <em>Problem-Solving:</em> Validated structure with 1.5× safety factor. Used fine-tolerance machining and double O-ring sealing.<br><br>
  
        <strong>Project Details and Results:</strong><br>
        <em>Challenges:</em> Withstanding high pressures while preventing leaks and maintaining sensor alignment.<br>
        <em>Solutions:</em> Validated structure with 1.5× safety factor. Used fine-tolerance machining and double O-ring sealing.<br>
        <em>Outcomes:</em> Housing successfully deployed with no leaks. Maintained sensor calibration during deep-sea operations.<br>
        <em>Lessons Learned:</em> Microscale precision and material compatibility are vital in extreme-pressure environments.
      </div>
    `,
    images: ["images/pressure-1.png", "images/pressure-2.png", "images/pressure-3.png"]
  },
  
  {
    id: 10,
    title: "Calibration Test Branch for Oceanographic Sensors",
    description: `
      <div style='text-align: left;'>
        <strong>Context:</strong> Sensor accuracy under high-pressure marine conditions must be validated in a controlled test environment.<br><br>
  
        <strong>Objective:</strong> Build a high-pressure calibration system that controls temperature within ±0.05°C and supports multiple sensor channels.<br><br>
  
        <strong>Your Role and Contribution:</strong><br>
        <em>Responsibilities:</em> Designed thermal regulation, vessel structure, and mounting interface. Programmed temperature control feedback.<br>
        <em>Tools and Technologies:</em> SolidWorks, thermal control software, precision temperature sensors, pressure regulators.<br>
        <em>Problem-Solving:</em> Used layered insulation, redundant sensors, and feedback-controlled heaters. Simulated heat flow in vessel.<br><br>
  
        <strong>Project Details and Results:</strong><br>
        <em>Challenges:</em> Ensuring uniformity in temperature distribution and chamber sealing.<br>
        <em>Solutions:</em> Used layered insulation, redundant sensors, and feedback-controlled heaters. Simulated heat flow in vessel.<br>
        <em>Outcomes:</em> Enabled precise calibration of 6 sensors in parallel. Maintained pressure to 10,000 psi and thermal control to within ±0.05°C.<br>
        <em>Lessons Learned:</em> Thermal management is critical for sensor repeatability and must be tested under realistic conditions.
      </div>
    `,
    images: ["images/Calibration-1.png", "images/Calibration-2.png", "images/Calibration-3.png", "images/Calibration-4.png", "images/Calibration-5.png"]
  },
  
  {
    id: 11,
    title: "Numerical Optimization of the Brachistochrone Problem",
    description: `
      <div style='text-align: left;'>
        <strong>Context:</strong> The classical Brachistochrone curve provides the shortest descent path under gravity. Its practical use lies in modern optimization techniques.<br><br>
  
        <strong>Objective:</strong> Convert the problem into a constrained numerical optimization and evaluate solutions using friction and obstacle-aware conditions.<br><br>
  
        <strong>Your Role and Contribution:</strong><br>
        <em>Responsibilities:</em> Formulated the problem, discretized the path, and coded optimization in Python using Conjugate Gradient and BFGS.<br>
        <em>Tools and Technologies:</em> Python, finite difference methods, gradient descent, BFGS optimization.<br>
        <em>Problem-Solving:</em> Applied warm-starting and path discretization to improve solver speed and accuracy.<br><br>
  
        <strong>Project Details and Results:</strong><br>
        <em>Challenges:</em> Ensuring convergence with frictional losses and obstacle avoidance. High-dimensional design space.<br>
        <em>Solutions:</em> Applied warm-starting and path discretization to improve solver speed and accuracy.<br>
        <em>Outcomes:</em> Achieved <1.3% error for n=10, 7.76% slower with friction. Solver scaled well to n=50.<br>
        <em>Lessons Learned:</em> Numerical solvers need structure-aware initialization. Obstacle and friction modeling shift outcomes significantly.
      </div>
    `,
    images: ["images/Brachistochrone-1.png", "images/Brachistochrone-2.png", "images/Brachistochrone-3.png", "images/Brachistochrone-4.png", "images/Brachistochrone-5.png"]
  },
  {
    id: 12,
    title: "Automated Sorting System Using Microcontroller (MECH 458)",
    description: `
      <div style='text-align: left;'>
        <strong>Context:</strong> Manual sorting in low-volume production and educational labs is time-consuming and prone to error. An automated, sensor-based sorting system was needed to increase speed and repeatability.<br><br>
  
        <strong>Objective:</strong> Design and build a microcontroller-based sorting system that detects materials based on reflectivity and sorts them into bins with precision and minimal user intervention.<br><br>
  
        <strong>Your Role and Contribution:</strong><br>
        <em>Responsibilities:</em> Co-led the programming and integration of sensors and actuators. Developed trapezoidal acceleration control for the stepper motor. Implemented object detection logic and supported full-system testing and calibration.<br>
        <em>Tools and Technologies:</em> Arduino Mega 2560, C programming, reflectivity sensors (SFH 310 NPN, OPB819Z), LCD interface, Hall effect sensors, stepper motors, PWM, real-time interrupts, FIFO queues, and modular code architecture.<br>
        <em>Problem-Solving:</em> Developed a delay-tuned trapezoidal acceleration profile to improve motor reliability and reduce mechanical overshoot. Calibrated analog reflectance thresholds for consistent sorting between aluminum, steel, white plastic, and black plastic.<br><br>
  
        <strong>Project Details and Results:</strong><br>
        <em>Challenges:</em> Maintaining sensor accuracy for different materials under ambient light and ensuring precise motor control during frequent directional changes.<br>
        <em>Solutions:</em> Applied signal averaging and hardware filtering (resistors/capacitors) to stabilize sensor input. Used modular arithmetic for shortest-path sorting and calibrated motor delays to optimize response time.<br>
        <em>Outcomes:</em> Achieved 0 misclassifications in the final test (48 objects sorted in 37 seconds). Successfully implemented full autonomous sorting logic for four distinct object categories.<br>
        <em>Lessons Learned:</em> Real-time systems demand a balance between mechanical design, sensor precision, and software responsiveness. Testing under full load conditions is crucial for validation.
      </div>
    `,
    images: ["images/Automated-1.png", "images/Automated-2.png", "images/Automated-3.png", "images/Automated-4.png", "images/Automated-5.png"]
  }
  
];


let currentProject = null;
let currentImageIndex = 0;

function openProject(projectId) {
  currentProject = projects.find(p => p.id === projectId);
  if (!currentProject) return;

  document.getElementById("project-title").innerText = currentProject.title;
  document.getElementById("project-description").innerHTML = currentProject.description;
  currentImageIndex = 0;
  document.getElementById("slider-image").src = currentProject.images[currentImageIndex];

  document.getElementById("project-modal").style.display = "flex";
}

function closeProject() {
  document.getElementById("project-modal").style.display = "none";
}

function prevSlide() {
  if (currentProject && currentImageIndex > 0) {
    currentImageIndex--;
    document.getElementById("slider-image").src = currentProject.images[currentImageIndex];
  }
}

function nextSlide() {
  if (currentProject && currentImageIndex < currentProject.images.length - 1) {
    currentImageIndex++;
    document.getElementById("slider-image").src = currentProject.images[currentImageIndex];
  }
}

// Close modal when clicking outside the modal content
window.addEventListener("click", function(event) {
  const modal = document.getElementById("project-modal");
  const content = document.querySelector(".modal-content");

  if (event.target === modal) {
      closeProject();
  }
});

