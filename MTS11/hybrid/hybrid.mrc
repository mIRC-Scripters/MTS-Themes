;;;;;;;;;;;;;;;;;;
;w00t;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;
;<copyright progType="script" coder="jeff johnson">
;<text>
;You can re distribute this......
;as long as this header STAYS and you dont clame
;u made it! if u violate this legal terms 
;will be made :p o and u can change it
;o and u cant change this header
;</text>
;<fileowner>
;Maker: Jeff Johnson
;Email: Jeff@JeffsWorld.net
;Nick: drevele
;Website: http://www.jeffsworld.net/
;</fileowner>
;</copyright>
;this file is used for the mts theme
;hybrid.
;version: [see readme.txt]
alias hy.real.h {
  ; real host of %::nick must be oper to c this
  %::echo %::pre 12real host9(11 $+ $3 $+ 9)
}
alias hy.part {
  if (%::text) {
    %:echo %::pre 12part nick9(11 $+ %::nick $+ 9) 12msg9(11$+ %::text $+9)
  }
  else {
    %:echo %::pre 12part nick9(11 $+ %::nick $+ 9)
  }
}
alias hy.isoper-whois {
  if (%::isoper == is) {
    %:echo %::pre 12this is a oper... beware they are l33t
  }
  else {
    %:echo %::pre 12this is not a oper you can now mess with them
  }
}
alias hy-whois {
  %:echo %::pre 12nick9(11 $+ $1 $+ 9)
  %:echo %::pre 12host9(11 $+ $2 $+ 9)
  %:echo %::pre 12name9(11 $+ $3- $+ 9)
}
alias hy-whowas {
  %:echo %::pre 12nick9(11 $+ $1 $+ 9)
  %:echo %::pre 12host9(11 $+ $2 $+ 9)
  %:echo %::pre 12name9(11 $+ $3- $+ 9)
}
alias hy-endwhois {
  %:echo %::pre 2[11end of whois2]
}
alias hy-endwhowas {
  %:echo %::pre 2[11end of who was2]
}
alias conInfo {
  echo -s 2[9 <--------(11connect_info9)-------->
  echo -s 12    your server tonite will be9(11 $+ $lower($server) $+ 9)
  echo -s 12    your nick tonite will also be9(11 $+ $lower($me) $+ 9)
  echo -s 12    your host have given your a host it will be9(11 $+ $lower($address($me,5)) $+ 9)
  echo -s 12    i have just got word your network is9(11 $+ $lower($network) $+ 9)
  echo -s 2]
  .timerStay-On 0 10 hy.stay.o
}
; heres some addon things to the script
; i know its a theme shouldnt have this
; but it realy is a nessesity to have a
; script like this
; <script type="stay-on" id="2233">
alias hy.stay.o {
  .ctcp $me stayBIG LONG STRING->>>)_>>1221323w00tssddf
}
ctcp *:stayBIG LONG STRING->>>)_>>1221323w00tssddf:{
  .haltdef
}
; </script>
alias hy.theme.true {
  ; added for a few things considering Hybrid script
  return $true
}
