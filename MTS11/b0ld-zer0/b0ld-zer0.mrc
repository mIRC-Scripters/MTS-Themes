alias _whois.start {
  %:echo 2...... •®• wh0is  $+ $1 $+  •®• ..........................
  %:echo 2:  $+ $1 $+  is (12 $+ $2 $+ 2)
  %:echo 2:  $+ $1 $+  Ircname (12 $+ $3- $+ 2)

}
alias _WHOIS.IDLE {
  %:echo 2:  $+ %::nick $+  Idle Time (12 $+ $duration(%::idletime) $+ 2) Sign-0n Time (12 $+ %::signontime $+ 2)
}