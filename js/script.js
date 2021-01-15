var app = new Vue ({
  el: '#root',
  data: {
    logoData:[],
    headerData:[],
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
