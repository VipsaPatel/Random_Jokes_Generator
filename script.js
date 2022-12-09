let my_jokes=[
            "The definition of a perfectionist: someone who wants to go from point A to point A+",

            "Traveling through the Midwest, I stopped at an Ohio welcome center to pick up a state map. I found plenty of brochures but no maps. Then I spotted two employees...",

            "Things I overheard at my health club: “I’m only taking this class so I don’t eat for an hour.” “Who knew 40 years of neglect would have repercussions?” “Does this...",

            "When my local barista handed me my change, one coin stood out. “Look at that. You rarely get one of these old wheat pennies nowadays,” I said, tapping the sheaf...",

            "One of my wife’s third graders was wearing a Fitbit watch, which prompted my wife to ask, “Are you tracking your steps?” “No,” said the little girl. “I wear this...",

            "During a job interview at the 99 Cents store, my son was asked, “Where do you see yourself in five years?” My son’s reply: “At the Dollar Store.” He got...",

            "Two guys stole a calendar. They got six months each. —Submitted by Alex Del Bene",

            "Could a ... ... librarian be called a bookkeeper? ... referee be a game warden? ... dairyman be a cowboy? ... cabinetmaker be the president? —Submitted by J. Lee",

            "Since the coronavirus outbreak, my 47-year-old son has been washing his hands religiously. In fact, he said, “I’ve been washing my hands so much, I found the answers to an old eighth-grade math quiz.” —Susan Freeman",

            "“I make mistakes; I’ll be the second to admit it.” —Jean Kerr, author",

            "I tried having my mother’s phone disconnected, but the customer-service rep told me that since the account was in my dad’s name, he’d have to be the one to put...",

            "I loved the dress that I bought at a flea market. It fit perfectly, and the skirt was a swirl of intricate pleats. I wore it confidently to an evening...",

            "Dad always bragged about the gunners on his ship. Once during target practice, an unmanned drone flew past an antiaircraft cruiser. The cruiser opened up, shells furiously flying all around...",

            "During World War II, my father often found himself stuck with KP duty. One day, convinced he could improve things, he told the head cook, “If you give me a...",

            "What I remember most about my dad’s jokes is my mother’s reaction. While everyone else was howling at one of his punch lines, my mom would always respond, “Bernard, no...",

            "My dad used to sing little ditties. This was my favorite: There was a young lady named Mabel. She danced on the dining room table. Her face grew red, When...",

            "Here’s my favorite dad joke, with me as the dad: Every Sunday on the way to church, we would have to stop at a railroad crossing. And each time, I’d...",

            "If it was a blustery day, you could be sure to hear my dad remark, “It was so windy today, I had to wrinkle my forehead and screw my cap...",

            "My dad was not a jokester, but his fun side did come out once in a while. When I was 12, he took me to a Chicago White Sox game...",

            "My father liked to say, “I’m bald because a good man always comes out on top.” Dad loved to make people laugh. At his funeral, the preacher said, “In his...",

            "If my father was in a doctor’s waiting room and saw another old-timer looking dejected, he’d shuffle up and tell him, “A rabbit goes to the dentist, and the dentist..."
    ]

    const index =(random)=>{
        return random[Math.floor(Math.random()*my_jokes.length)]
    }

    console.log(index(my_jokes));
    document.getElementById("joke").innerHTML=index(my_jokes)+"🤣🤣";
