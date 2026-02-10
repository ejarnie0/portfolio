export const PROJECTS = {
    "got-it": {
        title: "Got It",
        subtitle: "Website",
        heroImage: "/projects/gotIt/homepage.png",
        liveUrl: "https://got-it-phi.vercel.app/",
        heroAlt: "Got It preview",
        overviewTitle: "Support neurodiverse Level 1 electrical apprentices with an approachable study tool by combining clean UI, guided study sessions, and trustworthy AI sandboxed using their own academic material",
        overview:
        [
        `I was the co-product owner on a team of seven people and we were tasked with solving a problem that could help a minority group in the trades industry. My team was made up of neurodiverse individuals and we wanted to solve an issue that we could truly understand while simultaneously helping others much like us.`,
        `We started with the research, looking into different learning abilities such as ADHD, dyslexia, and autism. What do they generally struggle with when learning? What useful tools are already out there? How can we better them?`,
        `Using research, coupled with surveying real neurodiverse electrical apprentices, and interviews with neurodiverse electrical teachers and workers. We found people, especially the neurodiverse, often struggle to start studying when content feels inaccessible or overly complex.`,
        `This project focuses on reducing barriers by processing required materials into simplified, easy to understand content. Our goal was to make learning accessible, while staying as true to the original material as possible.`,
        `GotIt is a tool to support Level 1 electrical apprentices in British Columbia. The tailor-made AI parses through the overwhelming volume of dense, technical learning material to be consumed by users in a short timeframe, making it easier to read and digest.`,
        ],
        gallery: [
        "/projects/gotIt/homepage.png",
        "/projects/gotIt/dashboard.png",
        "/projects/gotIt/AIGeneration.png",
        "/projects/gotIt/mindMap.png",
        "/projects/gotIt/pdfView.png",
        "/projects/gotIt/studyGuide.png",
        "/projects/gotIt/signUp.png",
        "/projects/gotIt/pomodoroTimer.png",
        ],
        sections: [
        {
            title: "Keeping the UI simple and approachable so that people don’t have to waste time trying to figure out complicated software",
            body:
            [
            `In an industry swarming with different studying products and sites, I wanted our product to stand out from the crowd. We wanted to keep things accessible and approachable for any user. The UI needed to funnel users to their goal as quickly as possible without overwhelming them, a difficult task in today’s online world. `,
            `We wanted the website to be visually interesting, to draw people in and intuitively funnel them exactly where they wanted to go. We didn’t just want to be nice to look at, we wanted to take down learning barriers and help people by making something they looked forward to using.`,
            `We achieved this by combining a clean UI with guided study flow, we utilized our AI-assisted tools to turn dense content into manageable learning material. GotIt’s features provide simplification and summarization to reduce complexity of content, readability controls like font size and letter spacing to support accessibility, as well as a mind map that helps users visualize and connect concepts rather than reading the same wall of text multiple times.`,
            ],
            image: "/projects/gotIt/dashboard.png",
            alt: "Got It Dashboard",
            flip: false,
        },
        {
            title: `Ensuring the AI-generated output was accurate and trustworthy, without "hallucinations", or making things up. Cutting out the frustration and, in the context of the trades, dangerous consequences`,
            body:
            [
            `I spent a long time researching AI, its output, and how myself and the development team could sandbox our own AI. I found a lot of issues with hallucinations, which backed up what we found in our research. Multiple trades people we interviewed said that they could not use AI, or even general web browsers, at all when trying to study or find a solution to something they were working on. This is due to the extremely specific technical jargon used and how rules for trades differ from place to place. `,
            `Before this project, I had not learned much, if anything, about backend or databases. I had mostly learned front-end coding and ended up in a situation where I had to learn all of it, and quickly. I had about 2 months to learn everything I could, while simultaneously helping with the website’s UI/UX, before we could start developing the project.`,
            `To keep the AI-generated output as accurate to the source material as possible, we decided to sandbox the AI. I learned to use IBM’s WatsonX, trained our own AI, created specific AI prompting, and supplied it with its knowledge and database. Then, using a simple API call, we could send the trained AI a PDF, it would parse through it, then reply with the generated output.`,
            `GotIt also provides a split view of all AI output beside the source material to keep original context visible while viewing simplified material. This was to help ensure that users could trust where the content was coming from, and could look to the original materials if they needed to check where the AI was finding its information.`,
            ],
            image: "/projects/gotIt/styleguide.png",
            alt: "Got It process",
            flip: true,
        },
        {
            title: "Matching real studying habits. Yes, we wanted the UI to be usable and easy to look at, but we wanted to actually help people study. So we had to research how people actually studied",
            body:
            [
            `We didn’t want to solely focus on if our design made sense visually, but that the learning outcomes were being met. We wanted our website’s design to fit into the life of a person studying. That users could learn and retain the material, while still aiding in creating a less overwhelming experience for them.`,
            `We researched studying tools and tips directly aimed at neurodiverse learners, spoke with other neurodiverse people and how they liked to study. We also looked into different studying structures and what people’s routines were when they were studying.`,
            `This information helped us to decide what tools we wanted to include, such as the pomodoro  timer, the AI Simplification, Summarization, and Mind Maps. We even included an AI study guide that could help someone to plan out how to fit studying into their week.`,
            ],
            image: "/projects/gotIt/studyGuide.png",
            alt: "Got It process",
            flip: true,
        },
        ],
    },

    daybreak: {
        title: "DayBreak",
        subtitle: "Web Browser Game",
        heroImage: "/projects/daybreak/splashScreen.jpg",
        heroAlt: "DayBreak preview",
        overviewTitle: "A fast-paced, story-driven multiplayer game where players can make meaningful and strategic decisions that lead to exciting, balanced outcomes, keeping them coming back again and again",
        overview:
        [
        `I was the original product owner for this game and came up with the initial idea for the name, vibe, and art-direction. The idea was to create a multiplayer, dark-fantasy, and strategy game that we wanted to be engaging, intuitive, and fun while simultaneously feeling suspenseful and unpredictable. `,
        `My idea was picked and then the team ideated more about what we wanted the mechanics of the game to be. We did a lot of testing and found that the idea was a bit too complex for our timeline so we decided to keep the name and art-direction but change the mechanics of the game.`,
        `Our aim was to create a game loop where players make meaningful decisions with a combination of movement, timing, and tactical choices, while keeping the user experience threatening and surprising. We also wanted the game to have a cohesive art direction and UI design that communicates actions quickly during play.`,
        ],
        gallery: [],
        sections: [
        {
            title: "Designing an intuitive and user-friendly UI that was easy for players to learn quickly while staying invested in the gameplay",
            body: 
            [
            `Our team was tasked with creating an online web-browser game, so a big challenge we were thinking about was how to keep the user invested in playing the game. We wanted to know what brought people back to the same game over and over again, what could we do to make the user experience stream-lined and uncomplicated.`,
            `I conducted surveys, researched about games and how users interact with different gaming platforms, whether it be in person board-games, web-browser games, mobile games, or downloaded games (eg: Steam, EA, Mojang Studios, etc). I conducted interviews with people who designed games and took notes about their process and how they lead user-testing specifically with games in mind.`,
            `All of this helped in creating Daybreak and making sure our game was well developed and fun to play for users of every playing level.`,
            ],
            image: "/projects/daybreak/dashboard.png",
            alt: "DayBreak detail",
            flip: false,
        },
        {
            title: "Incorporating high quality sound design into Daybreak to immerse the player in the suspenseful and eerie atmosphere",
            body: 
            [
            `I reached out to film students, musicians, as well as anyone who understood sound-design for tips on how I could record voice lines and sound effects for Daybreak. I learned about how to properly record and what sound-design applications I could use to edit them.`,
            `I got help from my group mates and reached out to friends to record the voice lines and the finished products ended up being high quality and immersive for players. The goal was achieved and it was fun to teach myself a new skill that could help me in the future to understand peoples' recording process. The process really showed me how much work goes into this type of work and how skilled people are in the music and sound industry.`,
            ],
            image: "/projects/daybreak_process.png",
            alt: "DayBreak process",
            flip: true,
        },
        {
            title: "Illustrated a consistent visual design for characters, enemies, game assets, and menus to support clear gameplay communication while reinforcing the game’s dark-fantasy tone",
            body: 
            [
            `I helped in hand illustrating the menus, game assets, and icons for Daybreak. One of our challenges was designing a UI that stays legible under pressure: everything needed to communicate available actions and consequences at a glance. We wanted the visual style to support gameplay readability, communicating to players their available actions, consequences, and other player states at a glance, all while fitting the game’s dark-fantasy tone.`,
            `Our solutions paired clear, structured mechanics with illustrated UI components designed for fast recognition. The gameplay uses card-driven actions and event effects to create frequent decision points and high replay value, while consistent presentation helps players anticipate what each option does.`,
            ],
            image: "/projects/daybreak_process.png",
            alt: "DayBreak process",
            flip: true,
        },
        ],
    },

    "sailing-brochure": {
        title: "Sailing Brochure",
        subtitle: "InDesign & Photoshop",
        heroImage: "/projects/sailingBrochure/sailingBrochure2.jpg",
        heroAlt: "Sailing brochure preview",
        overviewTitle: "Overview",
        overview:
        "Describe the design goal and audience. What did you want it to feel like?",
        gallery: [
            "/projects/sailingBrochure/sailingBrochure2.jpg",
            "/projects/sailingBrochure/sailingBrochure3.jpg",
            "/projects/sailingBrochure/sailingBrochure4.jpg",
            "/projects/sailingBrochure/sailingBrochureCover.jpg",
        ],
        sections: [
        {
            title: "Layout & Visual System",
            body: "Talk about typography, hierarchy, grid, and style decisions.",
            image: "/projects/sailingBrochure/sailingBrochure1.jpg",
            alt: "Brochure spread",
            flip: false,
        },
        {
            title: "Final Result",
            body: "Explain what you delivered and what you’re proud of.",
            image: "/projects/sailingBrochure4.jpg",
            alt: "Brochure detail",
            flip: true,
        },
        ],
    },

    "skiing-posters": {
        title: "Skiing Posters",
        subtitle: "Illustrator & Photoshop",
        heroImage: "/projects/skiing.png",
        heroAlt: "Skiing posters preview",
        overviewTitle: "Overview",
        overview:
        "Describe the poster series concept and your creative direction.",
        gallery: [
            "/projects/skiingPosters/skiingPosterSnip.jpg",
            "/projects/skiingPosters/skiingPoster1.jpg",
            "/projects/skiingPosters/skiingPoster2.jpg",
            "/projects/skiingPosters/skiingPoster3.jpg",
        ],
        sections: [
        {
            title: "Visual Direction",
            body: "Describe the style: color palette, shapes, composition, mood.",
            image: "/projects/skiingPosters/skiingPoster3.jpg",
            alt: "Poster detail",
            flip: false,
        },
        ],
    },

    "realism-drawing": {
        title: "Realism Drawing",
        subtitle: "Photoshop",
        heroImage: "/projects/realisticPhoto/realisticPhotoSnip.png",
        heroAlt: "Realism drawing preview",
        overviewTitle: "Overview",
        overview:
        "Describe what you drew, what references you used, and what technique you practiced.",
        gallery: [],
        sections: [
        {
            title: "How I Shaded & Rendered",
            body: "Talk about brushwork, lighting, texture, and detail choices.",
            image: "/projects/realism_detail.png",
            alt: "Drawing detail",
            flip: false,
        },
        ],
    },
};
