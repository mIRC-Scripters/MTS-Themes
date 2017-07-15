alias Sn0oP.Load { %:echo %::pre Sn0oP Theme loaded. by: Sn0oPy-G-
  background -h " $+ $scriptdirCB- $+ $remove($1-,$chr(32)) $+ .bmp $+ " 
color inactive $color(editbox) }
alias Sn0oP.raw.333 { %:echo %::pre  $+ %::c1 $+ Topic set by: %::nick on: $asctime(%::text) | halt }
alias Sn0oP.raw.329 { %:echo %::pre  $+ %::c1 $+ Created on: $asctime(%::text) | halt }
alias Sn0oP.raw.324 { %:echo %::pre  $+ %::c1 $+ Modes: $chan(%::chan).mode | halt }
