function getRandomBool() {
    const randInt = Math.floor(Math.random() * 2);
    return randInt ? true : false
  }
  
  function getRandomItem(items) {
    return items[Math.floor(Math.random() * items.length)]
  }
  
  function getRandomSex() {
    return getRandomItem(["All", "Male", "Female"])
  }
  
  function getRandomStudyType() {
    return getRandomItem(["Observational", "Interventional"])
  }
  function getRandomInt(mi, ma) {
    const min = Math.ceil(mi);
    const max = Math.floor(ma);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function getRandomString(mi, ma) {
    const length = getRandomInt(mi, ma)
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  
  function getRandomNumberLow() {
    return getRandomInt(18, 30)
  }
  
  function getRandomNumberHigh() {
    return getRandomInt(55, 90)
  }
  
  function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
  
  function getRandomTimestamp() {
    return randomDate(new Date(1970, 1, 1), new Date()).getTime()
  }
  function getRandomUID() {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < 15; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  
  function getRandomResearcher() {
    return {
      id: getRandomUID(),
      name: getRandomString(10, 12),
      email: `${getRandomString(10, 12)}@gmail.com`
    }
  }
  
  function getRandomConditions() {
    const num = getRandomInt(1, 5)
    let conditions = []
    for (let i = 0; i <= num; i++) {
      conditions.push(getRandomString(10, 15))
    }
    return conditions
  }
  
  function getRandomLatLng() {
    const center = { //Atlanta, GA
      latitude: 33.7490,
      longitude: 84.3880
    }
    const radius = 50000 //meters
    return randomLocation.randomCirclePoint(center, radius)
  }
  
  function getRandomAddress() {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789 ';
    let charactersLength = characters.length;
    for ( let i = 0; i < 40; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  
  function getRandomLocation() {
    const {latitude, longitude} = getRandomLatLng()
    return {
      address: getRandomAddress(),
      coordinates: {
        latitude: latitude,
        longitude: longitude
      }
    }
  }
  
  function getRandomLocations() {
    const num = getRandomInt(1, 5)
    let locations = []
    for (let i = 0; i <= num; i++) {
      locations.push(getRandomLocation())
    }
    return locations
  }

  function getRandomQuestion() {
    return {
      type: getRandomItem(["Inclusion", "Exclusion"]),
      prompt: getRandomString(30, 60)
    }
  }

  function getRandomQuestions() {
    const num = getRandomInt(3, 12)
    let questions = []
    for (let i = 0; i <= num; i++) {
      questions.push(getRandomQuestion())
    }
    return questions
  }

  function getRandomResource() {
    return {
      name: getRandomString(12, 15),
      link: `${getRandomString(12, 15)}.com`
    }
  }

  function getRandomResources() {
    const num = getRandomInt(1, 5)
    let resources = []
    for (let i = 0; i <= num; i++) {
      resources.push(getRandomResource())
    }
    return resources
  }
  
  function generateTestStudy() {
    const study = {
      activated: getRandomBool(),
      title: getRandomString(50, 100),
      description: getRandomString(300, 500),
      sex: getRandomSex(),
      minAge: getRandomNumberLow(),
      maxAge: getRandomNumberHigh(),
      acceptsHealthyVolunteers: getRandomBool(),
      type: getRandomStudyType(),
      createdAt: getRandomTimestamp(),
      researcher: getRandomResearcher(),
      conditions: getRandomConditions(),
      locations: getRandomLocations(),
      questions: getRandomQuestions(),
      resources: getRandomResources()
    }
    return study
  }
  
  function generateTestStudies(n) {
    let studies = []
    for (let i = 0; i < n; i++) {
        studies.push(generateTestStudy())
    }
    return studies
  }