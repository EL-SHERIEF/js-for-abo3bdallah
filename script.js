document.addEventListener("DOMContentLoaded", function() {
    // Carousel data
    const carouselData = [
        {
            imgSrc: "https://res.cloudinary.com/dyl4kt2a5/image/upload/v1726928076/Frame_60_chq4k8.avif",
            category: "",
            title: "متجر كيـان",
            description: "مرحباً بكم في متجر كيان👋 مختصون في بيع حسابات ببجي العالمية والكورية والتيوانية وحسابات ببجي العشوائية وحسابات نتفلكس واشتراكات الiptv هيدرا وغيرها, اكتشف تشكيلتنا من الإشتراكات و الحسابات المميزة.",
            buttonLabel: "تسوق منتجاتنا",
            linkHref: "#rare-pubg"
        },
        {
            imgSrc: "https://res.cloudinary.com/dnt8j2c21/image/upload/v1727092311/878109c737bf0bc83b692663352aca3b-removebg-preview_jeoe1t.avif",
            //category: "ببجي",
            title: "احصل على حساب ببجي مميز الآن بأسهل طريقة",
            description: "حسابات ببجي عشوائية بمواصفات عالية ومفاجآت مميزة. اختر حسابك اليوم واستمتع بأفضل الأسلحة والملابس والشخصيات الرائعة. الفرصة بين يديك للحصول على حسابك المميز بسعر لا يُقاوم.",
            buttonLabel: "اشترِ الآن",
            linkHref: "#rare-pubg"
        },
        {
            imgSrc: "https://res.cloudinary.com/dnt8j2c21/image/upload/v1727092973/Frame_65_mly3pm.avif",
            category: "حصرياً على متجر كيان",
            title: "حسابات نتفلكس رخيصة",
            description: " احصل على اشتراك نتفلكس بسعر مُخفض وتمتع بمشاهدة أفلامك ومسلسلاتك المفضلة بجودة عالية دون أي انقطاع. اجعل تجربتك السينمائية مذهلة الآن بأسعار مناسبة لكافة الميزانيات.",
            buttonLabel: "اشترِ الآن",
            linkHref: "#rare-pubg"
        },
         {
            imgSrc: "https://res.cloudinary.com/dnt8j2c21/image/upload/v1727090595/Frame_69_zl41ye.avif",
            title: "انضم إلينا في مجتمعنا الرائع على تليجرام",
            description: "كن اول من يرى العروض والخصومات والحصريات, هداية يومية وفعاليات خطيرة فقط على قناة متجر كيان في التليجرام",
            buttonLabel: "انضم الى العائلة",
            linkHref: "#rare-pubg"
        },
         {
            imgSrc: "https://res.cloudinary.com/dnt8j2c21/image/upload/v1727093657/Frame_66_1_ef2zme.avif",
            title: "امتلك حساب ببجي الكورية عشوائي بأفضل سعر",
            description: "انضم إلى عالم ببجي الكورية واستمتع بمزايا حصرية وملابس وأسلحة لا تجدها في أي مكان آخر. حسابات ببجي الكورية تمنحك تجربة لعب فريدة وقوية. لا تنتظر، احصل على حسابك الآن.",
            buttonLabel: "اشترِ الآن",
            linkHref: "#rare-pubg"
        },
         {
            imgSrc: "https://res.cloudinary.com/dnt8j2c21/image/upload/v1727092316/Layer_2_at6tax.avif",
            title: "اشتراك IPTV بجودة عالية وبأقل الأسعار",
            description: "شاهد قنواتك المفضلة من جميع أنحاء العالم دون تقطيع. مع اشتراك IPTV لدينا، ستتمكن من متابعة البث المباشر لأفضل القنوات الرياضية والترفيهية بجودة خيالية وبدون تأخير.",
            buttonLabel: "اشترِ الآن",
            linkHref: "#rare-pubg"
        },
            {
            imgSrc: "https://res.cloudinary.com/dnt8j2c21/image/upload/v1727092872/Frame_64_sim4ic.avif",
            title: "اكتسب القوة والمهارات مع هاك ببجي",
            description: "استمتع بتجربة لعب مذهلة مع هاك ببجي الذي يمنحك أفضل المهارات والتقنيات لتحقيق الفوز في كل جولة. اطلب الآن وكن الرابح دائماً في كل معركة ببجي",
            buttonLabel: "اشترِ الآن",
            linkHref: "#rare-pubg"
        },
           {
            imgSrc: "https://res.cloudinary.com/dnt8j2c21/image/upload/v1727093855/Screenshot_2024-09-23_151641-removebg-preview_cxqplg.avif",
            title: "حسابات ببجي عشوائية بفرص مميزة كل يوم",
            description: "احصل على حساب ببجي عشوائي واكتشف المفاجآت المثيرة كل يوم. حسابات متنوعة تحتوي على أسلحة قوية ومهارات فريدة تساعدك على التفوق في اللعبة",
            buttonLabel: "اشترِ الآن",
            linkHref: "#rare-pubg"
        },
         {
            imgSrc: "https://res.cloudinary.com/dnt8j2c21/image/upload/v1727092311/878109c737bf0bc83b692663352aca3b-removebg-preview_jeoe1t.avif",
            title: "اختر حساب ببجي المثالي بأسلحة نادرة",
            description: "احصل على حساب ببجي مميز يحتوي على أسلحة وملابس نادرة وشخصيات قوية لا تتوفر في أي مكان آخر. ارتقِ بتجربتك في اللعبة الآن مع متجر كيان بأسعار تنافسية.",
            buttonLabel: "اشترِ الآن",
            linkHref: "#rare-pubg"
        },
        
    ];

    // Select the parent container where the carousel will be rendered
    const parent = document.querySelector('.hero-area.container.flex.flex-col.py-1 .flex.items-center');

    // Create a section element for the carousel
    const carouselSection = document.createElement('section');
    carouselSection.classList.add('carousel');

    // Create the list container for the carousel items
    const list = document.createElement('div');
    list.classList.add('list');

    // Dynamically generate carousel items
    carouselData.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        if (index === 0) itemDiv.classList.add('active');  // Add 'active' class to first item

        const figure = document.createElement('figure');
        const img = document.createElement('img');
        img.src = item.imgSrc;
        figure.appendChild(img);

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('content');

        const category = document.createElement('p');
        category.classList.add('category');
        category.textContent = item.category;

        const title = document.createElement('h2');
        title.textContent = item.title;

        const description = document.createElement('p');
        description.classList.add('description');
        description.textContent = item.description;

        const moreDiv = document.createElement('div');
        moreDiv.classList.add('more');

        const anchor = document.createElement('a');  
        anchor.href = item.linkHref;  
        anchor.textContent = item.buttonLabel;

        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "9");
        svg.setAttribute("height", "15");
        svg.setAttribute("viewBox", "0 0 9 15");
        svg.setAttribute("fill", "none");

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", "M7.5 13.5L1.5 7.5L7.5 1.5");
        path.setAttribute("stroke", "black");
        path.setAttribute("stroke-width", "2");
        path.setAttribute("stroke-linecap", "round");
        path.setAttribute("stroke-linejoin", "round");

        svg.appendChild(path);
        anchor.appendChild(svg);
        moreDiv.appendChild(anchor);

        // Append all elements to content div
        contentDiv.appendChild(category);
        contentDiv.appendChild(title);
        contentDiv.appendChild(description);
        contentDiv.appendChild(moreDiv);

        // Append figure and content div to item
        itemDiv.appendChild(figure);
        itemDiv.appendChild(contentDiv);

        // Append item to list
        list.appendChild(itemDiv);
    });

    // Add arrows and indicators
    const arrowsDiv = document.createElement('div');
    arrowsDiv.classList.add('arrows');

    const prevButton = document.createElement('button');
    prevButton.id = "prev";
    prevButton.innerHTML = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 7L10 12L15 17" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;

    const nextButton = document.createElement('button');
    nextButton.id = "next";
    nextButton.innerHTML = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 7L15 12L10 17" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;

    arrowsDiv.appendChild(prevButton);
    arrowsDiv.appendChild(nextButton);

    const indicatorsDiv = document.createElement('div');
    indicatorsDiv.classList.add('indicators');

    const numberDiv = document.createElement('div');
    numberDiv.classList.add('number');
    numberDiv.textContent = "01";  // Initialize with the first slide

    const ul = document.createElement('ul');
    carouselData.forEach((_, index) => {
        const li = document.createElement('li');
        if (index === 0) li.classList.add('active');  // Add 'active' class to the first dot
        ul.appendChild(li);
    });

    indicatorsDiv.appendChild(numberDiv);
    indicatorsDiv.appendChild(ul);

    // Append list, arrows, and indicators to the section
    carouselSection.appendChild(list);
    carouselSection.appendChild(arrowsDiv);
    carouselSection.appendChild(indicatorsDiv);

    // Append the entire carousel section to the parent container
    parent.appendChild(carouselSection);

    // Initialize carousel logic
    let prevBtn = document.getElementById('prev');
    let nextBtn = document.getElementById('next');
    let items = parent.querySelectorAll('.list .item');
    let dots = parent.querySelectorAll('.indicators ul li');

    let active = 0;
    let firstPosition = 0;
    let lastPosition = items.length - 1;
    let autoPlay;

    const startAutoPlay = () => {
        clearInterval(autoPlay); 
        autoPlay = setInterval(() => {
            nextBtn.click();
        }, 5000);
    }
    startAutoPlay();

    const setSlider = () => {
        let itemActiveOld = parent.querySelector('.list .item.active');
        if(itemActiveOld) itemActiveOld.classList.remove('active');
        items[active].classList.add('active');

        let dotActiveOld = parent.querySelector('.indicators ul li.active');
        if(dotActiveOld) dotActiveOld.classList.remove('active');
        dots[active].classList.add('active');

        parent.querySelector('.number').innerText = '0' + (active + 1);
        startAutoPlay();
    }
    setSlider();

    nextBtn.onclick = () => {
        active = active + 1 > lastPosition ? 0 : active + 1;
        setSlider();
    }
    prevBtn.onclick = () => {
        active = active - 1 < firstPosition ? lastPosition : active - 1;
        setSlider();
    }
    dots.forEach((item, position) => {
        item.onclick = () => {
            active = position;
            setSlider();
        }
    });
});

















































































































const parentContainer = document.querySelector('.container.header-container.flex.items-center.gap-3 .flex.justify-start.items-center');
const logoDiv = document.createElement('a');
logoDiv.classList.add('logoimg');
logoDiv.href = 'https://k2n1.com';
logoDiv.setAttribute('aria-label', 'Company Logo');
parentContainer.appendChild(logoDiv);


const marqueeParentContainer = document.querySelector('.hero-area.container.flex.flex-col.py-1');
const marquee = document.createElement('div');
marquee.classList.add('marquee');
if (marqueeParentContainer.children.length > 1) {
  marqueeParentContainer.insertBefore(marquee, marqueeParentContainer.children[1]);
} else {
  marqueeParentContainer.appendChild(marquee);
}

const marqueeImg = document.createElement('div');
marqueeImg.classList.add('marqueeimg');
marquee.appendChild(marqueeImg);
















if (window.location.hostname === 'k2n1.com' && window.location.pathname === '/') {
  const heroParentContainer = document.querySelector('.hero-area.container.flex.flex-col.py-1');

  if (heroParentContainer) {
    // Array of href URLs for both buttons per card
    const hrefUrls = [
      'https://k2n1.com/%D8%AD%D8%B3%D8%A7%D8%A8%D8%A7%D8%AA-%D8%A8%D8%A8%D8%AC%D9%8A-%D9%85%D9%85%D9%8A%D8%B2%D8%A9/c1376659210',
      'https://k2n1.com/%D8%AD%D8%B3%D8%A7%D8%A8-%D8%A8%D8%A8%D8%AC%D9%8A-%D8%B9%D8%B4%D9%88%D8%A7%D8%A6%D9%8A/c357268011',
      'https://k2n1.com/%D8%AD%D8%B3%D8%A7%D8%A8%D8%A7%D8%AA-%D8%A8%D8%A8%D8%AC%D9%8A-%D8%A7%D9%84%D9%83%D9%88%D8%B1%D9%8A%D8%A9/c542720759',
      'https://k2n1.com/%D8%AD%D8%B3%D8%A7%D8%A8%D8%A7%D8%AA-%D8%A8%D8%A8%D8%AC%D9%8A-%D8%AA%D9%8A%D9%88%D8%A7%D9%86%D9%8A%D8%A9/c831485848',
      'https://k2n1.com/%D8%B4%D8%B1%D8%A7%D8%A1-%D8%B4%D8%AF%D8%A7%D8%AA-%D8%A8%D8%A8%D8%AC%D9%8A-%D8%B1%D8%AE%D9%8A%D8%B5%D8%A9/c962799859',
      'https://k2n1.com/hack/c970415932'
    ];
    
    const h1s = [
      'شراء حسابات ببجي النسخة العالمية',
      'شراء حسابات ببجي العالمية العشوائية',
      'شراء حسابات ببجي النسخة الكورية',
      'شراء حسابات ببجي النسخة التيوانية',
      'شحن شدات ببجي',
      'شراء افضل هاكات ببجي المضمونة 100%'
    ];
    
    const h2s = [
      'لدينا اقوى حسابات ببجي العالمية, اقتن لنفسك حساب مميز وجذاب واستمتع بالمزايا النادرة التي طالما حلمت ان تجربها, فقط في تشكيلتنا.', 
        'لدينا تجميعة قوية من حسابات ببجي العشوائية, اقتن لنفسك حساب سريع بدون عناء, فقط في تشكيلتنا زيادة فرص العثور علي الاسلحة المطورة والسكنات النادرة والشدات.',
      'لدينا افضل حسابات ببجي الكورية, حسابات كثيرة  رانك عالي بسيرفرات اوربا واسيا, حسابات بأسلحة مطورة وسكنات مثك وغيرها من المزايا.',
      'لدينا ارخص حسابات ببجي التيوانية, حسابات كثيرة تايوانية رانك عالي بسيرفرات اوربا واسيا, حسابات بأسلحة مطورة وسكنات مثك وغيرها من المزايا.',
      'نقدم لكم افضل العروض علي شدات ببجي, اشحن بنفسك او اهدي اصدقائك بعض الهداية. #اشحنها_بنفسك',
   
      'تبغا تبهرهم؟ تشوف من الاشياء, تصويب آلي, منظور السكوب وغيرها من الخدع الي تقدر تساعدك وبدون متتبند, اكتشف عالم الهاكات واجعل اصدقائك يبكون ليل نهار.'
    ];
    
    const button1s = [
      ' اشتري الآن ',
      ' اشتري الآن ',
      ' اشتري الآن ',
      ' اشتري الآن ',
      ' اشتري الآن ',
      ' اكتشف الهاكات '
    ];
    
    const button2s = [
      ' اكتشف العروض ',
      ' اكتشف العروض ',
      ' اكتشف العروض ',
      ' اكتشف العروض ',
      ' اكتشف العروض ',
      ' اكتشف العروض  '
    ];

    // Create category-wrapper div
    const categoryWrapper = document.createElement('div');
    categoryWrapper.classList.add('category-wrapper1');

    const h1 = document.createElement('h1');
    h1.classList.add('category-title');
    h1.textContent = 'قسم';

    const h2 = document.createElement('h2');
    h2.classList.add('category-subtitle');
    h2.textContent = 'لدينا اقوى حسابات ببجي العالمية,والكورية والتيوانية وايضا حسابات ببجي العالمية المميزة بالإضافة إلى خدمات شحن الشدات وقسم الهاكات';

    const span = document.createElement('span');
    span.textContent = ' ببجي ';

    h1.appendChild(span);
    categoryWrapper.appendChild(h1);
    categoryWrapper.appendChild(h2);

    // Create wrapper1 div
    const wrapper1 = document.createElement('div');
    wrapper1.classList.add('wrapper1');

    // Create 6 card divs inside wrapper1 dynamically
    hrefUrls.forEach((url, i) => {
      const card = document.createElement('div');
      card.classList.add('card', `card-${i + 1}`);

      // Create card-img div instead of img
      const cardImg = document.createElement('div');
      cardImg.classList.add('card-img', `card-img-${i + 1}`);

      // Create info div with dynamic h1 and h2 inside
      const info = document.createElement('div');
      info.classList.add('info', `info-${i + 1}`);

      const cardTitle = document.createElement('h1');
      cardTitle.classList.add('card-title');
      cardTitle.textContent = h1s[i];  // Set dynamic h1

      const cardSubtitle = document.createElement('h2');
      cardSubtitle.classList.add('card-subtitle');
      cardSubtitle.textContent = h2s[i];  // Set dynamic h2

      info.appendChild(cardTitle);
      info.appendChild(cardSubtitle);

      // Create buttons div with two links
      const buttons = document.createElement('div');
      buttons.classList.add('buttons', `buttons-${i + 1}`);

      // Primary Button with dynamic content
      const button1 = document.createElement('a');
      button1.classList.add('primarybtn');
      button1.href = url;
      button1.textContent = button1s[i];  // Set dynamic button1 text

      // Secondary Button with dynamic content
      const button2 = document.createElement('a');
      button2.classList.add('secondarybtn');
      button2.href = url;
      button2.textContent = button2s[i];  // Set dynamic button2 text

      buttons.appendChild(button1);
      buttons.appendChild(button2);

      // Append card-img, info, and buttons to the card div
      card.appendChild(cardImg);
      card.appendChild(info);
      card.appendChild(buttons);

      // Append the card to wrapper1
      wrapper1.appendChild(card);
    });

    // Append wrapper1 to category-wrapper
    categoryWrapper.appendChild(wrapper1);

    // Insert category-wrapper as the third child in heroParentContainer
    if (heroParentContainer.children.length >= 2) {
      heroParentContainer.insertBefore(categoryWrapper, heroParentContainer.children[2]);
    } else {
      heroParentContainer.appendChild(categoryWrapper);
    }
  }
}


































if (window.location.hostname === 'k2n1.com' && window.location.pathname === '/') {
  const heroParentContainer = document.querySelector('.hero-area.container.flex.flex-col.py-1');

  if (heroParentContainer) {
    // Array of href URLs for both buttons per card
    const hrefUrls = [
      'https://k2n1.com/%D8%A7%D8%B4%D8%AA%D8%B1%D8%A7%D9%83-IPTV/c226451325',
      'https://k2n1.com/%D8%A7%D8%B4%D8%B1%D8%A7%D9%83-%D8%B4%D8%A7%D9%87%D8%AF-%D8%A7%D9%84%D8%A3%D8%B5%D9%84%D9%8A/c1696627540',
      'https://k2n1.com/%D8%AD%D8%B3%D8%A7%D8%A8%D8%A7%D8%AA-%D9%86%D8%AA%D9%81%D9%84%D9%83%D8%B3-%D8%B1%D8%AE%D9%8A%D8%B5%D8%A9/c1923378128',
      'https://k2n1.com/%D8%AD%D8%B3%D8%A7%D8%A8%D8%A7%D8%AA%20%D8%AA%D9%8A%D9%83%20%20%D8%AA%D9%88%D9%83/c749809992',
    ];
    
    const h1s = [
      'إشتراكات iptv',
      'إشتراكات شاهد الأصلي',
      'حسابات نتفلكس',
      'حسابات تيكتوك',
    ];
    
    const h2s = [
'لدينا عروض على جميع إشتراكات الهيدرا والiptv, إشترك الان و احصل علي إشتراكك بسعر اقل', 
'يوجد إشتراكات شاهد vip الأصلية بأقل سعر في السوق',
'حسابات نتفلكس رخيصة, اشتري حساب انت واصدقائك واستمتع بأرخص حسابات النتفلكس المشتركة',
'نوفر لكم حسابات تيكتوك مشهورة ويوجد عليها متابعين فعالين', 
       
    ];
    
    const button1s = [
'إشترك الان',
'إشترك الان',
'اشتري حساب',
'إشتري الان',
    ];
    
    const button2s = [
      ' اكتشف العروض ',
      ' اكتشف العروض ',
      ' اكتشف العروض ',
      ' اكتشف العروض ',
    ];


    const categoryWrapper = document.createElement('div');
    categoryWrapper.classList.add('category-wrapper2');

    const h1 = document.createElement('h1');
    h1.classList.add('category-title');
    h1.textContent = 'قسم';

    const h2 = document.createElement('h2');
    h2.classList.add('category-subtitle');
    h2.textContent = 'نقدم لكم مجموعة من افضل الحسابات والإشتراكات المختلفة من إشتراكات نتفلكس وشاهد وiptv حتى حسابات تيك توك متفاعلة';

    const span = document.createElement('span');
    span.textContent = ' الترفيه ';

    h1.appendChild(span);
    categoryWrapper.appendChild(h1);
    categoryWrapper.appendChild(h2);

    // Create wrapper1 div
    const wrapper1 = document.createElement('div');
    wrapper1.classList.add('wrapper1');

    // Create 6 card divs inside wrapper1 dynamically
    hrefUrls.forEach((url, i) => {
      const card = document.createElement('div');
      card.classList.add('card', `card-${i + 1}`);

      // Create card-img div instead of img
      const cardImg = document.createElement('div');
      cardImg.classList.add('card-img', `card-img-${i + 1}`);

      // Create info div with dynamic h1 and h2 inside
      const info = document.createElement('div');
      info.classList.add('info', `info-${i + 1}`);

      const cardTitle = document.createElement('h1');
      cardTitle.classList.add('card-title');
      cardTitle.textContent = h1s[i];  // Set dynamic h1

      const cardSubtitle = document.createElement('h2');
      cardSubtitle.classList.add('card-subtitle');
      cardSubtitle.textContent = h2s[i];  // Set dynamic h2

      info.appendChild(cardTitle);
      info.appendChild(cardSubtitle);

      // Create buttons div with two links
      const buttons = document.createElement('div');
      buttons.classList.add('buttons', `buttons-${i + 1}`);

      // Primary Button with dynamic content
      const button1 = document.createElement('a');
      button1.classList.add('primarybtn');
      button1.href = url;
      button1.textContent = button1s[i];  // Set dynamic button1 text

      // Secondary Button with dynamic content
      const button2 = document.createElement('a');
      button2.classList.add('secondarybtn');
      button2.href = url;
      button2.textContent = button2s[i];  // Set dynamic button2 text

      buttons.appendChild(button1);
      buttons.appendChild(button2);

      // Append card-img, info, and buttons to the card div
      card.appendChild(cardImg);
      card.appendChild(info);
      card.appendChild(buttons);

      // Append the card to wrapper1
      wrapper1.appendChild(card);
    });

    // Append wrapper1 to category-wrapper
    categoryWrapper.appendChild(wrapper1);

    // Insert category-wrapper as the third child in heroParentContainer
    if (heroParentContainer.children.length >= 3) {
      heroParentContainer.insertBefore(categoryWrapper, heroParentContainer.children[3]);
    } else {
      heroParentContainer.appendChild(categoryWrapper);
    }
  }
}







  
  
  
  
  
  
  























document.addEventListener("DOMContentLoaded", function () {
    // Create the button container
    const whatsappButton = document.createElement("div");
    whatsappButton.id = "whatsapp-button";

    // Create the WhatsApp link
    const whatsappLink = document.createElement("a");
    whatsappLink.href = "https://wa.me/+966545767198"; // Replace with your WhatsApp number
    whatsappLink.target = "_blank";

    // Create the SVG icon
    const svgIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none">
          <path d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z" fill="white"/>
        </svg>
    `;

    // Insert SVG into the link
    whatsappLink.innerHTML = svgIcon;

    // Append the link to the button
    whatsappButton.appendChild(whatsappLink);

    // Append the button to the parent #main-nav
    const mainNav = document.querySelector(".store-content");
    if (mainNav) {
        mainNav.appendChild(whatsappButton);
    }
});