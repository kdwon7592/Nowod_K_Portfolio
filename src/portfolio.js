const header = {
  // all the properties are optional - can be left empty or deleted
  // homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'Nowod_K.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  en: {
    name: 'My name is Dowon Kim',
    role: 'A Software Developer',
    description:
      'I am a developer with quick skill acquisition, a variety of experiences (web, app, server, etc.), and curiosity about technology. I responds positively and quickly to given tasks and issues, and can easily adapt to any task. I strive for better performance, readability, and efficient development.',
  },
  kr: {
    name: '저는 김도원이라고 합니다.',
    role: 'A Software Developer',
    description:
      '저는 빠른 기술 습득력과 다양한 경험(웹, 앱, 서버 등), 기술에 대한 호기심을 갖고 있는 개발자입니다. 주어진 업무와 이슈에 대해 적극적이고 빠르게 대응하며, 어떤 업무든 쉽게 적응할 수 있습니다. 더 나은 성능과 가독성, 효율적인 개발을 하고자 노력합니다.'
  },
  blog: 'https://velog.io/@nowod_it',
  social: {
    linkedin: 'https://www.linkedin.com/in/%EB%8F%84%EC%9B%90-%EA%B9%80-b45158170/',
    github: 'https://github.com/kdwon7592?tab=repositories',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Todo App',
    description:
      'Context API, Styled Component 활용한 간단한 Todo App 입니다.',
    stack: ['Styled Component', 'Javascript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    link: 'TodoApp',
    image_url: '/resoucres/image/todoList_image.png'
  },
  // {
  //   name: 'Project 2',
  //   description:
  //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   stack: ['SASS', 'TypeScript', 'React'],
  //   sourceCode: 'https://github.com',
  //   livePreview: 'https://github.com',
  // },
  // {
  //   name: 'Project 3',
  //   description:
  //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   stack: ['SASS', 'TypeScript', 'React'],
  //   sourceCode: 'https://github.com',
  //   livePreview: 'https://github.com',
  // },
]

const skills = {
  good: {
    skill: ['Javascript', 'Java', 'Spring', 'Oracle', 'MS-SQL', 'SVN', 'HTML/CSS', 'jquery'],
    kr: '실무에서 자주 사용하고, 익숙하게 쓰고 있어요.'
  },

  can: {
    skill: ['React', 'Android', 'My-SQL', 'Git', 'AWS', 'MS-AZURE'],
    kr: '실무에서 써본적도 있고, 어느정도 할 줄 알아요.'
  },

  readable: {
    skill: ['Python', 'SWIFT', 'C#', 'PHP'],
    kr: "코드를 읽고 이해할 수 있어요."
  },

  tools: {
    skill: ['Jenkins', 'Confluence', 'Trello', 'Intermax'],
    kr: "사용해봤어요."
  }
}

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'kdwon7592@naver.com',
}

export { header, about, projects, skills, contact }
