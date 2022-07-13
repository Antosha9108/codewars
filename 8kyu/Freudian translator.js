function toFreud(string) {
    let sex ='sex '
    let arr = string.split(' ').filter(word => word !== '').length
    
    
    
    
    return sex.repeat(arr).trim()
    }