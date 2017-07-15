alias raw311 { %:echo 0-10 $+ Start Of Whois For: 02(00 $+ %::nick $+ 02) | %:echo 0-• 10 $+ Host: 02(00 $+ %::address $+ 02) | set %whois $strip(%::realname) | %:echo 0-• 10 $+ Name: 02(00 $+ %whois $+ 02) | halt } 
alias raw319 { %:echo 0-• 10 $+ Chans: 02(00 $+ %::chan $+ 02) | halt }
alias raw312 { %:echo 0-• 10 $+ Server: 02(00 $+ %::wserver $+ 02) - 02(00 $+ %::serverinfo $+ 02) | halt } 
alias raw313 { %:echo 0-• 10 $+ Server Admin: $bracket2(%::isoper %::operline) | halt }
alias raw307 { %:echo 0-• 10 $+ Registered Nick: $bracket2(%::isregd) | halt }
alias raw317 { %:echo 0-• 10 $+ Sign on time: 02(00 $+ %::signontime $+ 02) | %:echo 0-• 10 $+ Idle duration: 02(00 $+ $duration(%::idletime) $+ 02) | halt }
alias raw318 { %:echo 0-10 $+ End of whois for: $bracket2(%::nick) | halt }
alias bracket2 { var %see = ( | var %saw = ) | return 2 $+ %see $+ 00 $+ $strip($1-) $+ 2 $+ %saw }
alias theme.notice { echo -a 2°10°0° 10Notice from $bracket2(%::nick) $+ : $bracket2(%::text) }
