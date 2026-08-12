// Header scroll effect
window.addEventListener('scroll', function () {
    const header = document.querySelector('.custom-header');
    if (window.scrollY > 40) {
        header.style.background = 'rgba(7, 16, 27, 0.98)';
        header.style.padding = '12px 0';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.6)';
    } else {
        header.style.background = 'rgba(11, 25, 44, 0.85)';
        header.style.padding = '18px 0';
        header.style.boxShadow = 'none';
    }
});

// Social sidebar hover animation
const socialLinks = document.querySelectorAll('.social-sidebar .social-link');
socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'scale(1.25) rotate(8deg)';
    });
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if(targetId !== '#') {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});



// Flip Card functionality for touch and click devices
document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});



document.addEventListener("DOMContentLoaded", function() {
    // تحديد عناصر صفحة About Us
    const aboutTitle = document.querySelector('.about-title');
    const aboutTexts = document.querySelectorAll('.about-text');
    const asterisk = document.querySelector('.asterisk');
    const aboutSection = document.querySelector('.about-us-section');

    // مراقبة وصول المستخدم لصفحة About Us عند السكرول
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                // 1. حركة العنوان
                if (aboutTitle) {
                    aboutTitle.classList.add('active');
                }

                // 2. حركة الفقرات بالتتابع (واحدة تلو الأخرى)
                aboutTexts.forEach((text, index) => {
                    setTimeout(() => {
                        text.classList.add('active');
                    }, (index + 1) * 250); // تأخير 250 مللي ثانية بين كل سطر
                });

                // 3. حركة النجمة في النهاية
                if (asterisk) {
                    setTimeout(() => {
                        asterisk.classList.add('active');
                    }, (aboutTexts.length + 1) * 250);
                }

            }
        });
    }, { threshold: 0.2 }); // تعمل الحركة عندما يظهر 20% من القسم في الشاشة

    if (aboutSection) {
        observer.observe(aboutSection);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const guaranteeSection = document.querySelector('#guarantee');
    const title = document.querySelector('.guarantee-title');
    const texts = document.querySelectorAll('.guarantee-text');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // تفعيل حركة العنوان
                title.classList.add('animate');
                
                // تفعيل حركة الفقرات بتتابع
                texts.forEach((text, index) => {
                    setTimeout(() => {
                        text.classList.add('animate');
                    }, (index + 1) * 300);
                });
                
                observer.unobserve(guaranteeSection);
            }
        });
    }, { threshold: 0.3 });

    if (guaranteeSection) {
        observer.observe(guaranteeSection);
    }
});




document.addEventListener("DOMContentLoaded", function() {
    // إعداد مراقب الحركة للأقسام عند التمرير (Intersection Observer)
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = entry.target;
                
                // تفعيل العناصر داخل السكشن المستهدف
                const animatedElements = section.querySelectorAll('.about-title, .about-text, .asterisk, .guarantee-title, .guarantee-text, .why-title, .arrow-circle, .feature-card');
                
                animatedElements.forEach((el, index) => {
                    setTimeout(() => {
                        el.classList.add('animate');
                        // دعم الكلاسات الأخرى مثل active إن وجدت
                        el.classList.add('active');
                    }, index * 150); // تأخير زمني بسيط بين كل عنصر وآخر لتظهر بشكل متتابع
                });

                // إيقاف المراقبة بعد تشغيل الحركة مرة واحدة
                observer.unobserve(section);
            }
        });
    }, observerOptions);

    // تفعيل المراقبة على الأقسام الرئيسية
    const sections = document.querySelectorAll('#about, #guarantee, #why-us');
    sections.forEach(section => {
        observer.observe(section);
    });
});







document.addEventListener("DOMContentLoaded", function() {
    const feedbackSection = document.querySelector('#feedback');
    const feedbackTitle = document.querySelector('.feedback-title');
    const feedbackCards = document.querySelectorAll('.feedback-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (feedbackTitle) feedbackTitle.classList.add('animate');
                
                feedbackCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('animate');
                    }, (index + 1) * 150);
                });

                observer.unobserve(feedbackSection);
            }
        });
    }, { threshold: 0.15 });

    if (feedbackSection) {
        observer.observe(feedbackSection);
    }
});




document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.testimonial-dots .dot');
    const prevBtn = document.querySelector('.prev-arrow');
    const nextBtn = document.querySelector('.next-arrow');
    let currentIndex = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            dots[i].classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
                dots[i].classList.add('active');
            }
        });
        currentIndex = index;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    // بدء التبديل التلقائي
    slideInterval = setInterval(nextSlide, 4000);

    // تفاعل السهم الأيمن
    nextBtn.addEventListener('click', () => {
        clearInterval(slideInterval);
        nextSlide();
        slideInterval = setInterval(nextSlide, 4000);
    });

    // تفاعل السهم الأيسر
    prevBtn.addEventListener('click', () => {
        clearInterval(slideInterval);
        prevSlide();
        slideInterval = setInterval(nextSlide, 4000);
    });

    // تفاعل النقاط / الشرط السفلية
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(slideInterval);
            showSlide(index);
            slideInterval = setInterval(nextSlide, 4000);
        });
    });
});