import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import "./content.css";

const Content = () => {
  const sliderRef = useRef();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false, // Set this to false since we are using custom buttons
    pauseOnHover: false,
  };

  const slidesData = [
    {
      id: 1,
      title: "Our Mission",
      content:
        "Our mission at [NGO Name] is to foster positive and lasting change in communities worldwide by promoting sustainable development, social justice, and equality. We believe in the inherent potential of individuals and communities to drive their own progress, and we strive to create an environment where everyone has the opportunity to thrive.\n\nObjectives:\n\n1. **Community Empowerment:** Work hand-in-hand with communities to identify their needs, strengths, and aspirations. Facilitate programs that empower individuals to actively participate in their own development, fostering a sense of ownership and pride.\n\n2. **Education for All:** Promote access to quality education, with a focus on marginalized and underserved populations. Advocate for inclusive educational policies and provide resources to enhance learning opportunities, equipping individuals with the skills needed for a brighter future.\n\n3. **Health and Well-being:** Improve community health by implementing sustainable healthcare initiatives. Prioritize preventative care, access to clean water, nutrition, and healthcare education to enhance overall well-being and reduce health disparities.\n\n4. **Gender Equality:** Champion gender equality and women's empowerment. Work towards dismantling systemic barriers that limit the opportunities available to women and girls, fostering an environment where all individuals can reach their full potential, regardless of gender.\n\n5. **Environmental Stewardship:** Promote sustainable practices that preserve and protect the environment. Implement initiatives that address climate change, promote conservation, and ensure responsible resource management for the benefit of current and future generations.\n\n6. **Human Rights Advocacy:** Stand as advocates for human rights, social justice, and equality. Raise awareness about issues such as discrimination, injustice, and inequality, and work towards creating a world where everyone is treated with dignity and respect.\n\n7. **Collaborative Partnerships:** Foster collaborative partnerships with local communities, governments, other NGOs, and international organizations. By working together, we can leverage collective resources and expertise to maximize our impact and create positive, lasting change.\n\nThrough these objectives, [NGO Name] endeavors to build a world where all individuals have the opportunity to lead fulfilling lives, contribute to their communities, and be active participants in the global pursuit of sustainable development and social justice.",
    },

    {
      id: 2,
      title: "Our Story",
      content:
        "Once upon a time, in a quaint little village nestled between rolling hills and lush green meadows, there lived a young girl named Lily. Lily was known for her curiosity and adventurous spirit, which often led her to explore the enchanting woods that bordered the village.      One day, as Lily wandered deeper into the forest than she had ever gone before, she stumbled upon a hidden glade bathed in the soft glow of a mysterious light. In the center of the glade stood a majestic tree with silver leaves that shimmered like moonlight. At the base of the tree lay a small, intricately crafted key. Intrigued, Lily picked up the key and noticed an inscription on it: Unlock the door to your dreams. With a sense of excitement and anticipation, she embarked on a journey to discover the door that awaited her. As Lily wandered through the forest, the key in her hand seemed to guide her. Eventually, she stumbled upon an ancient and ornate door nestled between two colossal trees. The key fit perfectly into the lock, and with a gentle turn, the door creaked open. To Lily's astonishment, she found herself in a breathtaking realm filled with vibrant colors and magical creatures. Talking animals, friendly fairies, and towering castles greeted her at every turn. The air was filled with laughter and the sweet scent of blooming flowers.Once upon a time, in a quaint little village nestled between rolling hills and lush green meadows, there lived a young girl named Lily. Lily was known for her curiosity and adventurous spirit, which often led her to explore the enchanting woods that bordered the village.      One day, as Lily wandered deeper into the forest than she had ever gone before, she stumbled upon a hidden glade bathed in the soft glow of a mysterious light. In the center of the glade stood a majestic tree with silver leaves that shimmered like moonlight. At the base of the tree lay a small, intricately crafted key. Intrigued, Lily picked up the key and noticed an inscription on it: Unlock the door to your dreams. With a sense of excitement and anticipation, she embarked on a journey to discover the door that awaited her. As Lily wandered through the forest, the key in her hand seemed to guide her. Eventually, she stumbled upon an ancient and ornate door nestled between two colossal trees. The key fit perfectly into the lock, and with a gentle turn, the door creaked open. To Lily's astonishment, she found herself in a breathtaking realm filled with vibrant colors and magical creatures. Talking animals, friendly fairies, and towering castles greeted her at every turn. The air was filled with laughter and the sweet scent of blooming flowers.",
    },
  ];

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="about-slider-container">
      <div className="about-slider-controls">
        <div className="about-content-btn" aria-label="Previous slide">
          <button onClick={previous} type="button">
            <GrFormPrevious />
          </button>
        </div>
      </div>
      <div className="about-slider">
        <Slider ref={sliderRef} {...settings}>
          {slidesData.map((slide) => (
            <div key={slide.id} className="slide">
              <h2>{slide.title}</h2>
              <p>{slide.content}</p>
            </div>
          ))}
        </Slider>
      </div>
      <div className="about-slider-controls">
        <div className="about-content-btn" aria-label="Previous slide">
          <button onClick={next} type="button">
            <GrFormNext />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
