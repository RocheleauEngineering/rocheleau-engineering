const projects = [
  {
    id: 1,
    title: "Thermal Optimization of Mini Fridge Using CFD",
    description: `
      <div style='text-align: left;'>
        <strong>Context:</strong> Mini fridges using thermoelectric cooling often suffer from low efficiency due to thermal design limitations, reducing their practical performance and energy efficiency.<br><br>
        <strong>Objective:</strong> Reverse engineer and improve the thermal performance of a commercial mini fridge by optimizing the heat sink and cold block geometry through simulation.<br><br>
        <strong>Your Role and Contribution:</strong><br>
        <em>Responsibilities:</em> Led the thermal simulation and redesign. Compared heat sink geometries and cold-side contact strategies.<br>
        <em>Tools:</em> SolidWorks Simulation, Simcenter Star-CCM+, MATLAB, parametric CAD modeling.<br>
        <em>Problem-Solving:</em> Used CFD and CAD to explore alternative fin geometries. Increased surface area and optimized heat dissipation paths while keeping manufacturing complexity low.<br><br>
        <strong>Results:</strong><br>
        <em>Challenges:</em> The original system had inefficient heat transfer on both cold and hot sides, limiting cooling capacity and COP.<br>
        <em>Solutions:</em> Used CFD and CAD to explore alternative fin geometries. Increased surface area and optimized heat dissipation paths while keeping manufacturing complexity low.<br>
        <em>Outcomes:</em> Improved coefficient of performance (COP) by 53% with only a 9.9% increase in cost. Reduced internal cold block temperature by 4.3°C.<br>
        <em>Lessons:</em> Validated the power of simulation-led design for low-cost thermal systems. Future work could incorporate experimental validation and advanced multi-physics models.
      </div>
    `,
    images: ["images/Thermal-1.png", "images/Thermal-2.png", "images/Thermal-3.png", "images/Thermal-4.png", "images/Thermal-5.png", "images/Thermal-6.png", "images/Thermal-7.png", "images/Thermal-8.png"]
  },
  {
    id: 2,
    title: "Design and Development of a VTOL SAR Drone",
    description: `
      <div style='text-align: left;'>
        <strong>Context:</strong> Remote areas in BC need affordable, long-endurance drones for search and rescue.<br><br>
        <strong>Objective:</strong> Build a 90-minute flight-capable VTOL drone for SAR missions.<br><br>
        <strong>Your Role and Contribution:</strong><br>
        <em>Responsibilities:</em> Led subsystem integration, electrical layout, propulsion modeling.<br>
        <em>Tools:</em> SolidWorks, ArduPilot, Pixhawk 6X, MATLAB, FEA, CNC.<br>
        <em>Problem-Solving:</em> Tail-sitter airframe, ESC/battery optimization.<br><br>
        <strong>Results:</strong><br>
        <em>Challenges:</em> Balancing endurance, cost, and flight stability.<br>
        <em>Solutions:</em> Tail-sitter airframe and energy-efficient system design.<br>
        <em>Outcomes:</em> 4.7kg prototype, 60% energy savings, 70% cost reduction.<br>
        <em>Lessons:</em> Signal tracing saved project during ESC failure.
      </div>
    `,
    images: ["images/VTOL-1.png", "images/VTOL-2.png", "images/VTOL-3.png"]
  },
  {
    id: 3,
    title: "Performance Evaluation of Ammonia Fuel Cells",
    description: `
      <div style='text-align: left;'>
        <strong>Context:</strong> DAFCs could be a low-carbon energy breakthrough, but face material and cost challenges.<br><br>
        <strong>Objective:</strong> Evaluate catalyst/membrane combos to reduce crossover and improve performance.<br><br>
        <strong>Your Role and Contribution:</strong><br>
        <em>Responsibilities:</em> Led analysis of catalyst and membrane configurations. Designed performance-based optimization.<br>
        <em>Tools:</em> MATLAB, electrochemical modeling, literature analysis.<br>
        <em>Problem-Solving:</em> Compared NiFe catalyst and thin membranes.<br><br>
        <strong>Results:</strong><br>
        <em>Challenges:</em> Cost and performance of materials.<br>
        <em>Solutions:</em> Modeled trade-offs to guide material selection.<br>
        <em>Outcomes:</em> 28% power boost, 40% lower cost.<br>
        <em>Lessons:</em> Multi-variable optimization is key to R&D success.
      </div>
    `,
    images: ["images/Ammonia-1.png","images/Ammonia-2.png","images/Ammonia-3.png","images/Ammonia-4.png"]
  },
  {
    id: 4,
    title: "Design and Analysis of Planetary Gearbox for Ferris Wheel",
    description: `
      <div style='text-align: left;'>
        <strong>Context:</strong> Ferris wheels need long-life gear systems with high safety margins.<br><br>
        <strong>Objective:</strong> Create a 3-stage planetary gearbox with 20+ year lifespan.<br><br>
        <strong>Your Role and Contribution:</strong><br>
        <em>Responsibilities:</em> Gear and shaft sizing, fatigue safety, CAD modeling.<br>
        <em>Tools:</em> SolidWorks, AGMA standards, FEA.<br>
        <em>Problem-Solving:</em> Ensured >3.0 safety factor and 20-year L10 bearing life.<br><br>
        <strong>Results:</strong><br>
        <em>Challenges:</em> Compact design, high loads, low maintenance.<br>
        <em>Solutions:</em> Optimized ratios and shaft layout.<br>
        <em>Outcomes:</em> Full CAD and documentation package ready for manufacture.<br>
        <em>Lessons:</em> Safety margin design upfront saves future failures.
      </div>
    `,
    images: ["images/Gearbox-1.png","images/Gearbox-2.png","images/Gearbox-3.png","images/Gearbox-4.png","images/Gearbox-5.png","images/Gearbox-6.png","images/Gearbox-7.png"]
  },
  {
    id: 5,
    title: "Design and Prototyping of MARV-1N: Mine Detection Robot",
    description: `
      <div style='text-align: left;'>
        <strong>Context:</strong> Unexploded landmines are a global threat.<br><br>
        <strong>Objective:</strong> Build a light robot that safely triggers landmines.<br><br>
        <strong>Your Role and Contribution:</strong><br>
        <em>Responsibilities:</em> Spring impactor design, Arduino control, chassis layout.<br>
        <em>Tools:</em> SolidWorks, Arduino, impact simulation, 3D printing.<br>
        <em>Problem-Solving:</em> Developed damping system and validated trigger force.<br><br>
        <strong>Results:</strong><br>
        <em>Challenges:</em> Triggering safely without self-damage.<br>
        <em>Solutions:</em> Mechanical spring-damper with locking system.<br>
        <em>Outcomes:</em> Triggered 100% of test mines in trials.<br>
        <em>Lessons:</em> Precision doesn’t require complex tech—smart mechanics work.
      </div>
    `,
    images: ["images/MARV-1N-1.png","images/MARV-1N-2.png","images/MARV-1N-3.png","images/MARV-1N-4.png","images/MARV-1N-5.png","images/MARV-1N-6.png"]
  },
  {
    id: 6,
    title: "Design and Deployment of Multibeam Sonar System",
    description: `
      <div style='text-align: left;'>
        <strong>Context:</strong> Arctic sonar deployments need rugged, shock-resistant structures.<br><br>
        <strong>Objective:</strong> Design impact-tested sonar housing for freezing marine environments.<br><br>
        <strong>Your Role and Contribution:</strong><br>
        <em>Responsibilities:</em> Led structure and material design, impact simulation, CNC planning.<br>
        <em>Tools:</em> FEA, SolidWorks, marine-grade alloys.<br>
        <em>Problem-Solving:</em> Simulated wave and ice impacts.<br><br>
        <strong>Results:</strong><br>
        <em>Challenges:</em> Ice damage and cold shock resistance.<br>
        <em>Solutions:</em> Modular, impact-resistant housing with cold-rated materials.<br>
        <em>Outcomes:</em> Operated without failure in Arctic missions.<br>
        <em>Lessons:</em> Redundancy and impact modeling are vital.
      </div>
    `,
    images: ["images/Multibeam-1.png","images/Multibeam-2.png","images/Multibeam-3.png","images/Multibeam-4.png","images/Multibeam-5.png","images/Multibeam-6.png"]
  },
  {
    id: 7,
    title: "Design of Mooring System for Antarctic Deployment",
    description: `
      <div style='text-align: left;'>
        <strong>Context:</strong> Long-term Antarctic data gathering requires ultra-durable moorings.<br><br>
        <strong>Objective:</strong> Design mooring system withstanding currents, ice drift, biofouling.<br><br>
        <strong>Your Role and Contribution:</strong><br>
        <em>Responsibilities:</em> Mooring anchor design, fatigue testing, corrosion resistance.<br>
        <em>Tools:</em> SolidWorks, FEA, marine cable testing.<br>
        <em>Problem-Solving:</em> Simulated drag and wave effects, selected corrosion-proof cables.<br><br>
        <strong>Results:</strong><br>
        <em>Challenges:</em> Sub-zero load fatigue, long service life.<br>
        <em>Solutions:</em> Mixed cable types and fasteners for durability.<br>
        <em>Outcomes:</em> 98% uptime across 2-year deployment.<br>
        <em>Lessons:</em> Early material and dynamic modeling drive success.
      </div>
    `,
    images: ["images/Mooring-1.png","images/Mooring-2.png","images/Mooring-3.png"]
  },
  {
    id: 8,
    title: "Design and Fabrication of Protective Winch Cover",
    description: `
      <div style='text-align: left;'>
        <strong>Context:</strong> Winches on vessels need UV and salt protection.<br><br>
        <strong>Objective:</strong> Create tool-free, weatherproof winch cover for fast installs.<br><br>
        <strong>Your Role and Contribution:</strong><br>
        <em>Responsibilities:</em> Designed mounting system, selected materials, CNC-fabricated cover.<br>
        <em>Tools:</em> SolidWorks, CNC, marine-grade coatings.<br>
        <em>Problem-Solving:</em> Snap-lock and modular design with UV shielding.<br><br>
        <strong>Results:</strong><br>
        <em>Challenges:</em> High exposure and need for tool-free use.<br>
        <em>Solutions:</em> Coated aluminum frame with snap-on polycarbonate cover.<br>
        <em>Outcomes:</em> Extended lifespan by 2 years, cut maintenance by 30%.<br>
        <em>Lessons:</em> Small design changes = big durability impact.
      </div>
    `,
    images: []
  },
  {
    id: 9,
    title: "Design of High-Pressure Instrument Housing",
    description: `
      <div style='text-align: left;'>
        <strong>Context:</strong> Ocean sensors must survive 10,000 psi depths.<br><br>
        <strong>Objective:</strong> Design pressure housing with leak-proof seals and structural reliability.<br><br>
        <strong>Your Role and Contribution:</strong><br>
        <em>Responsibilities:</em> FEA modeling, seal design, machining oversight.<br>
        <em>Tools:</em> SolidWorks, FEA, CNC machining, marine alloys.<br>
        <em>Problem-Solving:</em> Used dual O-ring and tight-tolerance machining.<br><br>
        <strong>Results:</strong><br>
        <em>Challenges:</em> Leak prevention and structural fatigue.<br>
        <em>Solutions:</em> 1.5× safety factor with stress-proof housing.<br>
        <em>Outcomes:</em> Zero-leak deployment under full pressure.<br>
        <em>Lessons:</em> Precision machining and redundancy are key.
      </div>
    `,
    images: ["images/pressure-1.png","images/pressure-2.png","images/pressure-3.png"]
  },
  {
    id: 10,
    title: "Calibration Test Branch for Oceanographic Sensors",
    description: `
      <div style='text-align: left;'>
        <strong>Context:</strong> Marine sensor accuracy depends on thermal/pressure calibration.<br><br>
        <strong>Objective:</strong> Build thermal-pressure calibration chamber for sensor testing.<br><br>
        <strong>Your Role and Contribution:</strong><br>
        <em>Responsibilities:</em> Thermal system design, programming feedback loop.<br>
        <em>Tools:</em> SolidWorks, sensors, thermal control software.<br>
        <em>Problem-Solving:</em> Redundant heaters/sensors, layered insulation.<br><br>
        <strong>Results:</strong><br>
        <em>Challenges:</em> Precision temperature uniformity at 10,000 psi.<br>
        <em>Solutions:</em> Layered insulation and closed-loop PID control.<br>
        <em>Outcomes:</em> ±0.05°C accuracy, 6-sensor simultaneous calibration.<br>
        <em>Lessons:</em> Realistic test environments lead to repeatable results.
      </div>
    `,
    images: ["images/Calibration-1.png","images/Calibration-2.png","images/Calibration-3.png","images/Calibration-4.png","images/Calibration-5.png"]
  },
  {
    id: 11,
    title: "Numerical Optimization of the Brachistochrone Problem",
    description: `
      <div style='text-align: left;'>
        <strong>Context:</strong> Solving the classic shortest-descent path problem with friction and obstacles.<br><br>
        <strong>Objective:</strong> Use numerical optimization (BFGS, CG) to find practical solutions.<br><br>
        <strong>Your Role and Contribution:</strong><br>
        <em>Responsibilities:</em> Problem formulation, discretization, solver development.<br>
        <em>Tools:</em> Python, BFGS, gradient descent, finite difference methods.<br>
        <em>Problem-Solving:</em> Used warm starts and structured discretization.<br><br>
        <strong>Results:</strong><br>
        <em>Challenges:</em> High-dimensional space with non-ideal friction.<br>
        <em>Solutions:</em> Efficient initialization, obstacle-aware gradient descent.<br>
        <em>Outcomes:</em> <1.3% error at n=10, stable to n=50.<br>
        <em>Lessons:</em> Structured math saves compute time.
      </div>
    `,
    images: ["images/Brachistochrone-1.png","images/Brachistochrone-2.png","images/Brachistochrone-3.png","images/Brachistochrone-4.png","images/Brachistochrone-5.png"]
  },
  {
    id: 12,
    title: "Automated Sorting System Using Microcontroller (MECH 458)",
    description: `
      <div style='text-align: left;'>
        <strong>Context:</strong> Manual sorting in labs is slow and error-prone.<br><br>
        <strong>Objective:</strong> Build sensor-based sorting machine for plastics/metals.<br><br>
        <strong>Your Role and Contribution:</strong><br>
        <em>Responsibilities:</em> Sensor integration, motor logic, full-system testing.<br>
        <em>Tools:</em> Arduino Mega, C, reflectivity sensors, LCD, Hall sensors.<br>
        <em>Problem-Solving:</em> Developed trapezoidal acceleration profile, analog threshold tuning.<br><br>
        <strong>Results:</strong><br>
        <em>Challenges:</em> Reflectivity variance and directional accuracy.<br>
        <em>Solutions:</em> Hardware filtering and real-time motor control.<br>
        <em>Outcomes:</em> 0 misclassifications, 48 objects in 37 seconds.<br>
        <em>Lessons:</em> Precision sensors and real-time control make automation shine.
      </div>
    `,
    images: ["images/Automated-1.png","images/Automated-2.png","images/Automated-3.png","images/Automated-4.png","images/Automated-5.png"]
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

