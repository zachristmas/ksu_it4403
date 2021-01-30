<template>
  <div>
    <h1>I'm Zach, nice to meet you.</h1>
    <img alt="Vue logo" src="@/assets/zchristmas-profile.png" />
    <h2>This webpage is for KSU course IT4403</h2>
    <div class="home">
      <Fieldset legend="Name and Affiliation">
        <ul>
          <li>My full name is Zachary Christmas</li>
          <li>I am currently a senior at KSU</li>
          <li>I have worked in web development for 3 years</li>
        </ul>
      </Fieldset>
      <br />
      <Fieldset legend="Site Overview and Purpose">
        <ul>
          <li>
            This site will serve as a home for the labs required in this course.
          </li>
          <li>
            Now that I own the domain, after this course I hope to maintain this
            site for freelance purposes.
          </li>
        </ul>
      </Fieldset>
      <br />
      <Fieldset legend="Course Information">
        <ul>
          <li>Course Code: <strong>IT4403</strong></li>
          <li>
            Course Name:
            <strong>Advanced Web and Mobile Application Development</strong>
          </li>
          <li>Course Instructor: <strong>Dr. Zhigang Li</strong></li>
          <li>Course Semester: <strong>SPRING 2021</strong></li>
        </ul>
      </Fieldset>
      <br />
      <Fieldset legend="KSU Link">
        <div>
          <h3>
            <a href="https://ccse.kennesaw.edu/it"
              >https://ccse.kennesaw.edu/it</a
            >
          </h3>
        </div>
      </Fieldset>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {}
};
</script>

<style scoped>
.home {
  text-align: left;
  padding: 2em;
}
</style>
