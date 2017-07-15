alias raw.311.s { %:echo 10 $+ ----Start of Whois For: $bracket2.s(%::nick) $+ ---- | %:echo 10|-• 10 $+ Host: $bracket2.s(%::address) | set %whois $strip(%::realname) | %:echo 10|-• 10 $+ Name: $bracket2.s(%whois) | halt } 
alias raw.319.s { %:echo 10|-• 10 $+ Chans: $bracket2.s(%::chan) | halt }
alias raw.312.s { %:echo 10|-• 10 $+ Server: $bracket2.s(%::wserver) - $bracket2.s(%::serverinfo) | halt } 
alias raw.313.s { %:echo 10|-• 10 $+ Server Admin: $bracket2.s(%::isoper %::operline) | halt }
alias raw.307.s { %:echo 10|-• 10 $+ Registered Nick: $bracket2.s(%::isregd) | halt }
alias raw.317.s { %:echo 10|-• 10 $+ Sign on time: $bracket2.s(%::signontime) | %:echo 10|-• 10 $+ Idle duration: $bracket2.S($duration(%::idletime))  | halt }
alias raw.318.s { %:echo 10 $+ ----10 $+ End of Whois For: $bracket2.s(%::nick) $+ ---- | halt }
alias bracket2.s { var %see = ( | var %saw = ) | return 2 $+ %see $+ 01 $+ $strip($1-) $+ 2 $+ %saw $+  }
alias theme.notice.s { echo -a 10•02•01• 10Notice from 02(01 $+ %::nick $+ 02) 02(01 $+ %::text $+ 02) }
