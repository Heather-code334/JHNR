function searchCourses() {
    // Dummy Data (Replace with actual backend API)
    const courses = [
        { name: "Intro to Programming", creditHours: 3, prerequisites: "None", modality: "Online", maxEnrollment: 30 },
        { name: "Advanced JavaScript", creditHours: 4, prerequisites: "Intro to Programming", modality: "In-Person", maxEnrollment: 25 },
        { name: "Database Systems", creditHours: 3, prerequisites: "None", modality: "Hybrid", maxEnrollment: 20 }
    ];

    // Get search inputs
    const department = document.getElementById("department").value.toLowerCase();
    const instructor = document.getElementById("instructor").value.toLowerCase();
    const courseNumber = document.getElementById("courseNumber").value.toLowerCase();

    // Filter courses based on input (Simple example)
    const filteredCourses = courses.filter(course =>
        (!department || course.name.toLowerCase().includes(department)) &&
        (!instructor || course.prerequisites.toLowerCase().includes(instructor)) &&
        (!courseNumber || course.creditHours.toString().includes(courseNumber))
    );

    // Display results
    const resultsBody = document.getElementById("resultsBody");
    resultsBody.innerHTML = ""; // Clear previous results

    if (filteredCourses.length === 0) {
        resultsBody.innerHTML = "<tr><td colspan='5'>No courses found</td></tr>";
    } else {
        filteredCourses.forEach(course => {
            const row = `
                <tr>
                    <td>${course.name}</td>
                    <td>${course.creditHours}</td>
                    <td>${course.prerequisites}</td>
                    <td>${course.modality}</td>
                    <td>${course.maxEnrollment}</td>
                </tr>
            `;
            resultsBody.innerHTML += row;
        });
    }
}
