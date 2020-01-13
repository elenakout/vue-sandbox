<template>
  <section class="events">
    <div class="cards-container">
      <div class="card">
        <div class="card-header">
          <div class="header-block">
            <span>12</span>
            <span>Oct</span>
          </div>
          <div class="header-content">
            <h2 class="event-title">Event Title</h2>
            <p class="event-date">18-5-2019</p>
            <p class="event-location">Milano</p>
          </div>
        </div>
        <div class="card-image">
          <img src="https://i.imgur.com/EeY3Fjj.jpg?2" alt="event-img" />
        </div>
        <div class="card-details">
          <p class="event-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, ullam deserunt sunt
            quas consequatur, beatae asperiores fuga corporis impedit, fugit quis quo nisi ducimus
            quisquam repellat recusandae neque non sequi?
          </p>
          <a href="#" class="btn btn-solid">Read More</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  padding: 39px 0;
  background-color: rgb(203, 204, 206);
}

img {
  /* All images should be 100% of their parent container */
  width: 100%;
  max-width: 100%;
  height: 200px;
  object-fit: cover;
}

a {
  text-decoration: none;
  color: black;
}

p {
  font-size: 16px; /* 16px */
}

.cards-container {
  width: 100%;
  max-width: 1225px;
  margin: 0 auto;
  padding: 0 24px;
}

.card {
  background-color: rgb(205, 192, 216);
  width: 350px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 6px 15px 5px rgba(0, 0, 0, 0.2);
}

.card-header {
  flex-grow: 1;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
}

.header-content {
  padding: 15px 0;
  align-items: end;
  display: flex;
  flex-direction: column;
}

.header-content h2 {
  font-size: 20px;
  font-weight: 400;
}

.header-content p {
  font-size: x-small;
}

.header-block {
  /* padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: blue;
  margin-right: 15px;
  margin-left: 15px; */
  width: 60px;
  height: 60px;
  margin: 0 12px;
  background-color: blue;
  color: gold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: 300;
}

.event-date {
  margin-bottom: 0;
}

.card-details {
  align-items: center;
  display: flex;
  flex-direction: column;
}

.card-details p {
  font-size: 16px;
  padding: 12px;
}

.card-details a {
  padding: 4px 13px;
  background-color: blue;
  font-weight: 300;
  margin-bottom: 15px;
  color: #fff;
}
</style>
