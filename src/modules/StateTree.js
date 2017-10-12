import {
  globalConfig,
  defaultLanguage
} from '../../config/config'

export const StateTree = {
  billing: {},
  checkout: {},
  shipping: {
    provinces: [],
    districts: []
  },
  app: {
    acceptToken: '',
    anonymousToken: '',
    language: defaultLanguage,
    refreshToken: '',
    settings: [{
      key: 'vi.company.address',
      value: 'Bitexco Financial Management Office, Hai Trieu, Ben Nghe, Ho Chi Minh, Viet Nam'
    },
    {
      key: 'vi.company.phone',
      value: '1800 8000'
    },
    {
      key: 'vi.company.email',
      value: 'support@reewod.com'
    }
    ],
    userData: {
      id: 0,
      userName: '',
      acceptToken: '',
      refreshToken: '',
      bankCode: '',
      street: '',
      paymentMethod: '',
      paymentType: 0,
      phoneNumber: '',
      defaultBillingAddress: 0,
      defaultShippingAddress: 0,
      email: 'abc@email.com',
      expired: '2017-08-13T16:31:10.195Z',
      firstName: '',
      lastName: '',
      imageUrl: '',
      addresses: [

        {
          district: '',
          districtId: 0,
          firstName: '',
          id: 0,
          isDefaultBilling: 0,
          isDefaultShipping: 0,
          lastName: '',
          phoneNumber: '',
          province: '',
          provinceId: 0,
          street: '',
          userId: 0,
          ward: '',
          wardId: 0
        }
      ],
      cart: {
        anonymousToken: '',
        items: [{
          id: 0,
          menuId: 0,
          menuProductId: 0,
          productId: 0,
          productName: '',
          price: 0,
          quantity: 0,
          createdAt: '2017-07-29T17:25:29.000Z',
          orderQuantity: 0,
          thumbUrl: 'http://api.reewod.com/public/uploads/no-images.jpg'
        }],
        sumQuantity: 0,
        total: 0
      }
    }
  },
  cart: {
    total: 0,
    sumQuantity: 0,
    items: []
  },
  customeDatePicker: {
    current_week: 0,
    days: [{
      date: new Date(),
      dateOfMonth: 1,
      dayOfWeek: 'Sun',
      dayOfWeekMobile: 'Su',
      future: false,
      past: false,
      productQuantity: 0,
      selected: false,
      sumQuantity: 0
    }]
  },
  form: {},
  intl: {
    locale: defaultLanguage,
    messages: {}
  },
  home: {},
  loading: {
    isloading: false
  },
  menuDetail: {
    categoryId: 0,
    chefId: 0,
    components: [{
      componentId: 0,
      componentName: '',
      id: 0
    }],
    createdAt: '2017-05-27T23:34:16.000Z',
    description: '',
    hasLeftQuantity: 0,
    id: 0,
    images: [{
      type: 1,
      typeName: 'primary',
      name: 'no-image',
      url: 'http://api.reewod.com/public/uploads/no-images.jpg',
      alt: 'no image'
    }, {
      type: 2,
      typeName: 'thumbnail',
      name: 'no-image',
      url: 'http://api.reewod.com/public/uploads/no-images.jpg',
      alt: 'no image'
    }],
    isPublished: 1,
    isShowHomePage: 1,
    menu: {
      id: 0,
      appliedAt: '07/30/2017'
    },
    menus: [{
      id: 0,
      appliedAt: '07/30/2017',
      productQuantity: 0,
      sumQuantity: 0
    }],
    menuProduct: {
      id: 0,
      quantity: 0,
      hasLeftQuantity: 0
    },
    menuId: 0,
    menuProductId: 0,
    name: '',
    nutritions: [{
      id: 0,
      leftNode: 0,
      nutritionId: 0,
      nutritionName: '',
      parentId: 0,
      productId: 0,
      rightNode: 0,
      value: ''
    }],
    oldPrice: 0,
    otherProducts: [{
      id: 0,
      name: '',
      price: 0,
      oldPrice: 0,
      imageUrl: 'http://api.reewod.com/public/uploads/no-images.jpg',
      ratingPoint: 0,
      menuProductId: 0,
      menuId: 0,
      seeName: ''
    }],
    prepairation: '',
    price: 0,
    quantity: 0,
    ratingPoint: 0,
    ratings: [{
      comment: '',
      createdAt: '2017-05-28T00:24:16.000Z',
      fullName: 0,
      id: 0,
      point: 0,
      productId: 0,
      updatedAt: '2017-05-28T00:24:16.000Z',
      userId: 0
    }],
    seo: {
      seName: '',
      metaKeyword: '',
      metaDescription: '',
      metaTitle: ''
    },
    shortDescription: '',
    updatedAt: '2017-07-02T02:45:34.000Z'
  },
  menuPage: {
    categories: [{
      categoryDescription: '',
      categoryId: 0,
      categoryName: '',
      products: [{
        categoryDescription: '',
        categoryId: 0,
        categoryName: '',
        id: 0,
        imageUrl: 'http://api.reewod.com/public/uploads/no-images.jpg',
        menuId: 0,
        menuProductId: 0,
        name: '',
        oldPrice: 0,
        price: 0,
        quantity: 5,
        ratingPoint: '',
        seName: 'init'
      }]
    }]
  },
  router: {
    locationBeforeTransitions: {}
  },
  signin: {
    isRunning: false,
    signInErrorMessage: ''
  },
  facebookLogin: {
    accessToken: 'EAAYdNYHJpEMBAJE7rxgUZBC8AAY7aAPKwXejA0xVQ5lZABRE',
    expiresIn: 100,
    id: '1422200707847849',
    email: 'dtpham258@gmail.com',
    name: 'Phạm Nguyên Cát',
    picture: {
      data: {
        is_silhouette: false,
        url: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/19511523_1388792047855382_2933562930388889339_n.jpg?oh=1f643843da863f3160541c18fcaa3cd6&oe=59F6CEFD'
      }
    },
    signedRequest: 'vvpewmDOieQjZ-yifJxpbn1IGPuzEhMjxQGEMuiBKyQ.eyJhbGdvcml0aG0iO',
    userID: '1422200707847849'

  },
  chef: {
    name: 'name of chef',
    avatarUrl: 'link of chef avatar',
    fbLink: "link of chef's fb",
    shortBio: 'short bio',
    bio: 'introduce about chef ',
    rating: 4.5,
    totalReview: 20177,
    fiveStar: 14262,
    fourStar: 4192,
    threeStar: 1220,
    twoStar: 321,
    oneStar: 182,
    products: [{
      name: 'product name',
      id: '123',
      imageUrl: 'http://api.reewod.com/public/uploads/1501382531153.jpg',
      component: 'Xuc xich, nuoc mam, trung',
      seeName: 'sename of product'
    }],
    reviews: [{
      name: 'name or email of human review',
      comment: "comment of human's review",
      rate: 5,
      productName: 'product name',
      seeName: 'se-name'
    }]
  },
  privacy: {
    id: 1,
    name: 'term',
    description: '<p>Plaid Boxes. In the case of Plaid Boxes, the ingredients will be packaged using insulated packaging and gel ice packs. We recommend that you plan in advance for any Plaid Box delivery to ensure proper storage and refrigeration prior to consumption. You are responsible for inspecting all Plaid Boxes you receive from us for any spoilage, damage or other issues upon delivery and we recommend that you immediately refrigerate all perishable ingredients as needed. The condition and consumption of the Plaid Box is solely at your risk, and you are solely responsible for the appropriate and safe washing, handling, preparation, storage, cooking, use and consumption of the Plaid Box ingredients following delivery.</p>\n<h4>Feedback</h4>\n<p>We welcome feedback, comments, and suggestions for improvements to our Services (&ldquo;Feedback&rdquo;). You can submit Feedback by emailing us at <a href="https://reewod.com/support/">https://reewod.com/support/</a>. You grant to us a non-exclusive, worldwide, perpetual, irrevocable, fully-paid, royalty-free, sublicensable, and transferable license under any and all intellectual property rights that you own or control to use, copy, modify, create derivative works based upon, and otherwise exploit the Feedback for any purpose.</p>\n<h4>Content and Content Rights</h4>\n<p>For purposes of these Terms, &ldquo;<strong>Content</strong>&rdquo; means text, graphics, images, music, software, audio, video, works of authorship of any kind, and information or other materials that are posted, generated, provided, or otherwise made available through the Services.</p>',
    'createdAt': '2017-06-29T15:26:59.000Z',
    'updatedAt': '2017-08-17T07:02:05.000Z'
  },
  order: {
    totalRecords: 15,
    records: [{
      id: 15,
      userId: 32,
      status: 0,
      shipmentStatus: 0,
      quantity: 2,
      total: 75000,
      createdAt: '2017-08-11T07:32:34.000Z',
      updatedAt: '2017-08-11T07:32:35.000Z',
      shipmentAddress: 7,
      billingAddress: 7,
      note: '',
      code: 1502436754737,
      tokenPayment: '',
      errorCodePayment: '00',
      checkoutUrlPayment: '',
      timeLimitPayment: 1503041565,
      descriptionPayment: '',
      paymentType: 1,
      totalFeeShipping: 2000,
      isFreeShip: 0,
      statusName: 'New'
    },
    {
      id: 14,
      userId: 30,
      status: 0,
      shipmentStatus: 0,
      quantity: 2,
      total: 100000,
      createdAt: '2017-08-08T04:28:43.000Z',
      updatedAt: '2017-08-08T04:28:44.000Z',
      shipmentAddress: 4,
      billingAddress: 4,
      note: '',
      code: 0,
      tokenPayment: '',
      errorCodePayment: '00',
      checkoutUrlPayment: '',
      timeLimitPayment: 1502771333,
      descriptionPayment: '',
      paymentType: 1,
      totalFeeShipping: 2000,
      isFreeShip: 0,
      statusName: 'New'
    }
    ]
  },
  support: {
    content: {
      id: 0,
      description: '',
      name: '',
      createdAt: '',
      updatedAt: ''
    }
  },
  orderDetail: [{
    id: 0,
    productId: 0,
    productName: '',
    quantity: 0,
    price: 0
  }],
  review: {
    currentProductId: 0
  },
  fb: {
    isLogedIn: false
  },
  rating: {

  }
}
export default StateTree
