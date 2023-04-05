let appData = {
        name: "Gmail",
        mailboxes: [
                    "inbox",
                    "spam",
                    "sent",
                    "draft",
                    "trash",
        ],
        contacts: [
                    {name: "Aaron", lastMessage: "Let's meet at noon"},
                    {name: "Jacky", lastMessage: "Please attach file"},
                    {name: "Donald", lastMessage: "Send me your schedule"},
        ],
        inbox: [
                    {sender: "WeEnergies", emailBody: "Your energy bill is ready"},
                    {sender: "discovery+", emailBody: "Your free trial begins now"},
                    {sender: "Uber Eats", emailBody: "Last call for $25 off"},
        ],
        draft: [
                    {recipient: "tiffany@mail.com", emailBody: "Meet for coffee", sent: true,},
        ],
}


//List of mailbox names
console.log(appData.mailboxes);

//List of emails
console.log(appData.inbox);

//Text of second email in inbox
console.log(appData.inbox[1].emailBody);

//Mark draft email as sent
console.log(appData.draft[0].sent);

//Add draft email to draft mailbox
appData.draft[1]={recipient: "john@mail.com", emailBody: "My hours of availability", sent: false, };
console.log(appData.draft);