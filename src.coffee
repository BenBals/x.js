x = (s) ->

  _ = {}

  selector = s

  _.element = ->
    return document.querySelector(selector)

  _.elements = ->
    return document.querySelectorAll(selector)

  _.e = _.element
  _.es = _.elements

  # METHODES

  _.addClass = (newClass, index) ->

    # Checking if all elements or just at index
    if index == undefined
      __elements__ = _.elements()

      # looping though all elements
      for element in __elements__
        # checking if it already has a class
        if element.className == element.className.split(newClass).join('')
          if element.className == ""
            element.className = newClass
          else
            element.className += " " + newClass
    else

      # check if index is in range
      if index >= _.elements().length or index < 0
        console.warn "You provided an index (#{index}) that is out of range to a x.addClass. The selector was #{selector}"
        return null

      #selecting element at index
      __element__ = _.elements()[index]
      # checking if element has already a class
      if __element__.className == ""
        __element__.className = newClass
      else
        __element__.className += " " + newClass

    # returning which class was added
    return newClass

  _.append = (newHtml, index) ->
    if index == undefined
      __elements__ = _.es()
      for element in __elements__
        element.innerHTML += newHtml
    else
      # check if index is in range
      if index >= _.elements().length or index < 0
        console.warn "You provided an index (#{index}) that is out of range to a x.append. The selector was #{selector}"
        return null

      __element__ = _.es()[index]
      __element__.innerHTML += newHtml

    return newHtml


  _.html = (newHtml, index) ->
    # check if newHtml was provided
    if newHtml != undefined and typeof(newHtml) != "number"
      # check if an index was provided
      if index == undefined
        __elements__ = _.es()
        for element in __elements__
          element.innerHTML = newHtml
      else
        if index >= _.elements().length or index < 0
          console.warn "You provided an index (#{index}) that is out of range to a x.html. The selector was #{selector}"
          return null
        __element__ = _.es()[index]
        __element__.innerHTML = newHtml
      return newHtml

    else
      if newHtml == undefined
        return _.e().innerHTML
      else
        if newHtml >= _.elements().length or newHtml < 0
          console.warn "You provided an index (#{newHtml}) that is out of range to a x.html. The selector was #{selector}"
          return null
        return _.es()[newHtml].innerHTML


  _.removeAllClasses = (index) ->
    # checking if an index was provided
    if index == undefined
    
      __elements__ = _.elements()
      
      for element in __elements__
        element.className = ""

    else

      # check if index is in range
      if index >= _.elements().length or index < 0
        console.warn "You provided an index (#{index}) that is out of range to a x.removeAllClasses. The selector was #{selector}"
        return null
      # selecting the element
      __element__ = _.elements()[index]
      __element__.className = ""

    return ""


  _.removeClass = (oldClass, index) ->
    # checking if an index was provided
    if index == undefined
      # selecting all elements
      __elements__ = _.elements()

      # looping though the elements
      for element in __elements__
        # removing the class with split magic
        element.className = element.className.split(oldClass).join('').split('  ').join(' ').trim()
    else

      # check if index is in range
      if index >= _.elements().length or index < 0
        console.warn "You provided an index (#{index}) that is out of range to a x.removeClass. The selector was #{selector}"
        return null

      # selecting the element
      __element__ = _.elements()[index]
      # removing the class with split magic
      __element__.className = __element__.className.split(oldClass).join('').split('  ').join(' ').trim()

    #returning which class was removed
    return oldClass



  return _