function domainName(url){
  url = url.replace('http://','').replace('www.','')
    .replace('https://','').split('.')
  return url[0]
}

// P a string containing url
// R a string with just the name of the domain
// E "http://google.com" => 'google'
// P first we need to split the original string (by // and . )and
//   set limit to 2 so we can get rid of the last part right there
//   then we can .replace the first part with the " ". after that we can
//   join it back into the string and trim it.
  