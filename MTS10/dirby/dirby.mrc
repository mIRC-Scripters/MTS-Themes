alias _onload {
  linesep -s 
  echo -s   ______________________________
  echo -s  $chr(124) 2T11heme 2D11irby 2L11oaded ... 
  echo -s  $chr(124) $+ 2 by murphyx 0___________________
  linesep -s
}
alias _onload.s {
  linesep -s 
  echo -s   ______________________________
  echo -s  $chr(124) 2T3heme 2D3irby 2L3oaded ... 
  echo -s  $chr(124) $+ 2 by murphyx 0___________________
  linesep -s
}

alias w.s {
  %:echo  [3/Whois ____________________________  0___ 8_15 _ 
  %:echo  8 $str($chr(160),3) · 14N3Nick: %::nick  ( $+ %::address $+ ) 
  %:echo  8 $str($chr(160),3) · 14R3Realname is: %::realname 
}
alias w.i { %:echo 8 $str($chr(160),3) · 14I3Idle: $duration(%::idletime)  0 >> 14S3Signon: %::signontime }
alias w.c { %:echo 8  $str($chr(160),3) ·  14C3Channels: $replace(%::chan,@,3@,+,8+) }
alias w.a { %:echo 8  $str($chr(160),3) · 14 $+ $left($gettok(%::nick,1,32),1) $+ 3 $+ $left($gettok(%::nick,1,32),1) $+  $+ $right($gettok(%::nick,1,32),-1) is Away: %::text }
alias w.se { %:echo  8 $str($chr(160),3) · 14 $+ $left($gettok(%::nick,1,32),1) $+ 3 $+ $left($gettok(%::nick,1,32),1) $+  $+ $right($gettok(%::nick,1,32),-1) using: %::server }
alias w.h { %:echo 8 $str($chr(160),3) ·  14V3Vhost of %::nick $+ : $gettok(%::text,3-,32) }
alias w.us { %:echo 8 $str($chr(160),3) · 14 $+ $left($gettok(%::nick,1,32),1) $+ 3 $+ $left($gettok(%::nick,1,32),1) $+  $+ $right($gettok(%::nick,1,32),-1) using mode: $gettok(%::text,5-,32) }
alias w.r { %:echo 8 $str($chr(160),3) · 14N3Nick is registered: (+r) }
alias w.f { %:echo [3/End Whois ________________________  0___8 _15 _ }
alias n.c { 
  if (%::chan != %::nameschan) {
    %:echo [11/Names3 %::chan ________________  0__3 1_15 _
    %::nameschan = %::chan
  }
  %:echo $replace($gettok(%::text,2-,32),@,15@,+,3+)
}
alias enn { %:echo [11/End Names ______________________  0__3 1_15 _ | unset %::nameschan }
alias n.c.s { 
  if (%::chan != %::nameschan) {
    %:echo [15/Names3 %::chan ________________  0__3 1_15 _
    %::nameschan = %::chan
  }
  %:echo $replace($gettok(%::text,2-,32),@,15@,+,3+)
}

alias enn.s { %:echo [15/End Names ______________________  0__3 1_15 _ | unset %::nameschan }
alias js { %:echo $chr(160) $str(_,30) 3 %::chan  $str(_,31) }
alias wct { %:echo  $chr(124) %::pre  Topic in %::chan : " %::text " }
alias wcc { %:echo  1 $+ $chr(166) %::pre Set by:  %::nick on %::text  } 
alias wcm { %:echo 1 $+ $chr(166) %::pre Modes in %::chan : ( $+ %::modes $+ ) }
alias wcd { %:echo $chr(124)  %::pre Was created:  $asctime(%::text)  $str(_,37) }
