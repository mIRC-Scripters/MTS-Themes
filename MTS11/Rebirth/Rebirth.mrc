alias rebirth.whois {
  %:echo 5ÚÄ9[WHOIS9]5ÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
  %:echo 5³ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ $+ %::nick $+ 9( $+ %::address $+ 9)
  %:echo 5³ÿÿÿÿÿÿÿÿÿÿÿÿÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
  %:echo 5³ÿÿ9realÿname:ÿÿ5³  %::realname
  %:echo 5³ÿÿÿÿÿ9server:ÿÿ5³  %::server
  %:echo 5³ÿÿÿ9channels:ÿÿ5³  $replace(%::chan,@#,9@#,+#,9+#)
  if (%::away) %:echo 5³ÿÿÿÿÿÿÿ9away:ÿÿ5³  %::away
  if (%::idletime) {
    %:echo 5³ÿÿÿÿÿÿÿ9idle:ÿÿ5³  %::idletime
    %:echo 5³ÿÿ9signedÿon:ÿÿ5³  %::signontime
  }
  %:echo 5ÀÄÄÄÄÄÄÄÄÄÄÄÄÙ
}

alias rebirth.load {
  %:echo 5ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
  %:echo 5³ Rebirth Theme Loaded, Enjoy!
  %:echo 5³ Created by Nick of AmeriChat #ircscriptaz
  %:echo 5ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
}
