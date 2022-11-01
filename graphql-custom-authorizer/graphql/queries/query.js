mutation CreateEvent {
    createEvent(name: "My First Event", when: "Today", where: "My House", description: "Very first event") {
      id
      name
      comments(limit: 10, nextToken: "") {
        items
        nextToken
      }
      description
      when
      where
    }
    deleteEvent(id: "")
  }
  
  query ListEvents {
    listEvents {
      items {
        id
        name
        description
        when
        where
        comments
      }
      nextToken
    }
    getEvent(id: "") {
      description
      id
      name
      when
      where
    }
  }
  