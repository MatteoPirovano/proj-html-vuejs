var app = new Vue ({
  el: '#root',
  data: {
    logoData:'img/logo.png',
    headerData:[
      { navSection: 'Home' },
      { navSection: 'Services' },
      { navSection: 'About' },
      { navSection: 'Videos' },
      { navSection: 'Blog' }
    ],
    videosData:[
      {
        photo: 'img/video2-2x.jpg',
        title: 'Thighs & glute workout',
        description:'Increase your mobility',
      },
      {
        photo: 'img/video7-2x.jpg',
        title: 'Lift, firm & perk up',
        description:'feel young again',
      },
      {
        photo: 'img/video9-2x.jpg',
        title: 'Slim & trim your waist',
        description:'Shed those extra pounds',
      }
    ],
    articlesData:[
      {
        photo: 'img/blog4-2x.jpg',
        title: 'The best protein shake',
        author: 'Admin',
        date: 'November 26th, 2019',
        section:'Gym',
      },
      {
        photo: 'img/blog1-2x.jpg',
        title: 'Ultimate cardio workout',
        author: 'Admin',
        date: 'November 26th, 2019',
        section:'Gym',
      },
      {
        photo: 'img/blog3-2x.jpg',
        title: 'New juices available now',
        author: 'Admin',
        date: 'November 26th, 2019',
        section:'Gym',
      }
    ],
    socialNetworkData:[
      { name: 'fab fa-facebook-f' },
      { name: 'fab fa-twitter', },
      { name: 'fab fa-youtube', },
      { name: 'fab fa-instagram', },
      { name: 'fab fa-linkedin-in' }
    ],
    activitiesData:[
      {
        name: 'Yoga',
        logo:'img/sponsor-1-2x-200x103.png' ,
        description: 'Tristique aliquam in nullam habitasse nunc, amet vel consectetur. Nulla in suspendisse dolor, aliquet.',
        linkDescription: 'Visit Yoga Studio'
      },
      {
        name: 'Fitness Center',
        logo: 'img/sponsor-2-2x-200x103.png',
        description: 'Feugiat etiam dui mauris pharetra mauris sed pharetra. Convallis sapien ornare cras faucibus nulla porta dui a.',
        linkDescription: 'Join Fitness Center'
      },
      {
        name: 'Fitness Club',
        logo: 'img/sponsor-3-2x-200x103.png',
        description: 'Nisl at quam adipiscing montes, nec, adipiscing commodo aliquam tincidunt. Ligula in habitant et sagittis imperdiet.',
        linkDescription: 'Learn about FC'
      },
      {
        name: 'Power Gym',
        logo: 'img/sponsor-4-2x-200x103.png',
        description: 'Proin in viverra maecenas et mattis ut nibh enim. Gravida ultricies mi porta lacus. Et posuere velit sed nec eleifend.',
        linkDescription: 'Visit Power Gym'
      }
    ]
  }
})
