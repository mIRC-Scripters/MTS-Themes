alias lusers {
  %:echo 14-15x14- Current global users:15 $1 14Max:15 $2
  %:echo 14-
}
alias dns {
  %:echo [Ip address $+ : $iif(%::iaddress,%::iaddress,Unknown) $+ ]
  %:echo [Named address $+ : $iif(%::naddress,%::naddress,Unknown) $+ ]
  %:echo [Resolved address $+ : $iif(%::raddress,%::raddress,Unknown) $+ ]
}
alias topic {
  %:echo 14---15[14topic15]14---
  %:echo >> $1-
}
alias topicn {
  %:echo 15>>14 set by15:14 $1 on15:14 $2-
  %:echo 14---15-14-----15-14---
}
alias whinit {
  %:echo 15-
  %:echo $chr(3) 14---15[14/whois $1 $+ 15]14---
  %:echo $chr(3) $chr(3) 15>> 14Ircname15:14 $3-
  %:echo $chr(3) $chr(3) 15>>14 Address15:14 $2
}
alias whstatus { %:echo $chr(3) $chr(3) 15>>14 Status15:14 $1- }
alias whircop { %:echo $chr(3) $chr(3) 15>>14 Ircop15:14 $1- }
alias whserver { %:echo $chr(3) $chr(3) 15>>14 Server15:14 $1- }
alias whchan { %:echo $chr(3) $chr(3) 15>>14 Chans15:14 $1- }
alias whaway { %:echo $chr(3) $chr(3) 15>>14 Away15:14 $1- }
alias widle { %:echo $chr(3) $chr(3) 15>>14 Idle15:14 $duration($1) 15/14 Signon15:14 $2- } 
alias whend {
  %:echo $chr(3) 14---15[14/whois end15]14---
  %:echo 15-
}
