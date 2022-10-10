// Q: 929 - https://leetcode.com/problems/unique-email-addresses/

/**
 * @param {string[]} emails
 * @return {number}
 */
 var numUniqueEmails = function(emails) {
    const result = new Set();
    
    for(let email of emails){
        const parts = email.split("@");
        
        const localName = parts[0].split("+");
        
        const realName = `${localName[0].split(".").join("")}@${parts[1]}`;
        
        result.add(realName);
    }
        
    return result.size;
};