alias E.Whois {
  %:echo  12¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯15¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯0¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
  %:echo %::pre 0/Whois of: %::nick 0[ $+ %::address $+ ]                                                                                                         
  %:echo %::pre 0Realname: %::realname                                             
}
alias E.whois1 {
  %:echo %::pre 0Status: %::nick is $iif(%::isregd != is,not) a registered nick
}
alias E.whois2 {
  %:echo %::pre 0End of /Whois
  %:echo  12________________________________15_________________0__________________
}
alias E.whowas {
  %:echo  12¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯15¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯0¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
  %:echo %::pre 0/Whowas
  %:echo %::pre $+ %::nick $+ 0[ $+ %::adress $+ ] is: %::realname 
}
alias E.whowas2 {
  %:echo %::pre 0End of /Whowas to %::nick
  %:echo  12________________________________15_________________0__________________
}
alias E.servt {
  %:echo  12¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯15¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯0¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
  %:echo %::pre 0Users online: %::users 0[invisible: %::value $+ ]
}
alias E.servd {
  %:echo %::pre 0Global users: %::users 0[max: %::value $+ ]
  %:echo  12________________________________15_________________0__________________
}
alias E.topic {
  %:echo %::pre Topic: " $+ %::text $+ "                                                                      
}
alias E.topic2 {                                                                                                
  %:echo %::pre Set by %::nick on %::text                                                              
}
