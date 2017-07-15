alias nique.winfo {
  %:echo 2 ÚÄÄÄÄÄÄ¿ 0(2 $+ %::nick $+ 0)  
  %:echo 2ÚÄÄÄÄÄÄ2/whois2ÄÄ2ÄÄ 3Ä 3ÄÄ 2úú3ú 2ú2ú3 ú
  %:echo 2 $+ ³³ 0Info 2³0 %::nick ( $+ %::address $+ )
  %:echo 2 $+ ³³ 0Name 2³0 %::realname
}
alias nique.help { %:echo 2 $+ ³³ 0Help2 ³0 %::nick is available for help.  }
alias nique.wtime { %:echo 2 $+ ³³ 0Idle2 ³0 $duration(%::idletime) | %:echo 2 $+ ³³ 0s/on2 ³0 %::signontime }
alias nique.wadmin { %:echo 2 $+ ³ 0Admn 2³³00 $1 0is a network admin. }
alias nique.wreg { %:echo 2³³ 0regd 2³0 %::nick 2is a registered nick. }
alias nique.wchan { %:echo 2 $+ ³³ 0Chan 2³0 %::chan }
alias nique.wserver { %:echo 2 $+ ³³ 0Serv 2³0 %::wserver 2(2 $+ %::serverinfo $+ 2) }
alias nique.waway { %:echo 2 $+ ³³ 0Away 2³0 %::text }
alias nique.wtrue { %:echo 2 $+ ³³ 0True 2³0 %::nick 0 $+ %::text }
alias nique.whost { %:echo 2 $+ ³³ 0Host 2³0 %::text }
alias nique.wop { %:echo 2 $+ ³³ 0Oper 2³2 %::nick 0is an irc operator. }
alias nique.wend { %:echo 2 $+ ÀÄ2ÄÄÄÄÄÄÙÄÄ %::pre $+ %::pre %::pre | %:echo 2 $+ $chr(32) $+ ÀÄÄÄÄ2/whois2ÄÄ2ÄÄ 3Ä 3ÄÄ 2úú3ú 2ú2ú3 ú  }
alias nique.namestart {
  %:echo 2ÚÄÄÄÄÄÄ3/names %::chan $+ ÄÄ2ÄÄ 3Ä 3ÄÄ 2úú3ú 2ú2ú3 ú   
  %:echo 2 %::chan 3:3 %::text
}
alias nique.namesend { %:echo 2ÀÄÄ2Ä3ÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ2ÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ2ÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ3ÄÄÄÄÄÄÄÄÄÄ ÄÄÄÄ ÄÄÄ 3 Ä }
alias nique.topic { %:echo 2ÚÄÄÄÄÄÄ2Channel Info 2ÄÄÄÄ %::pre | %:echo %::pre Topic 3:0 %::text }
alias nique.modes { %:echo %::pre Modes 3:0 %::modes | %:echo 2ÀÄÄÄÄÄÄ %::pre }
alias nique.other { %:echo 2 $+ ³ 2Notes 3:2 %::text }
alias nique.load { 
  %:echo 3 $+ ÚÄÄÄÄ 2(3Info2)  
  %:echo 3ÚÄÄÄÄÄÄ2VeroniqueÄÄ2ÄÄ 3Ä 3ÄÄ 2úú3ú 2ú2ú3 ú
  %:echo 3 $+ ³³ 3Veronique has been successfully loaded.
  %:echo 3 $+ ³³ 3Please e-mail me or add me to msn for 
  %:echo 3 $+ ³³ 3more information, questions, comments
  %:echo 3 $+ ³³ 3or suggections. aim : wcrackwheadw or 
  %:echo 3 $+ ³³ 3MSN : marijaneblessedme024@hotmail.com.
  %:echo 3 $+ ÀÄ2ÄÄÄÄÄÄÄÄÄ2ÄÄ2ÄÄ 3Ä 3ÄÄ 2úú3ú 2ú2ú3 ú %::pre $+ %::pre %::pre 
  %:echo 3 $+ $chr(32) $+ ÀÄÄÄÄ2ÄÄÄÄ2ÄÄ2ÄÄ 3Ä 3ÄÄ 2úú3ú 2ú2ú3 ú 
  beep
}
alias nique.lusers { 
  %:echo 2ÚÄÄÄÄÄÄ3/lusers2ÄÄ2ÄÄ 0Ä 3ÄÄ 2úú3ú 2ú2ú3 ú
  %:echo 2 $+ ³ 0Users 3:0 %::users
  %:echo 2 $+ ³ 0Invis 3:0 %::value
  %:echo 2 $+ ³ 0Serve 3:0 %::server

}
alias nique.lusers2 { %:echo 2³ 0Opers 3:0 %::value }
alias nique.lusers5 { %:echo 2³ 0Chann 3:00 %::value }
alias nique.lusers3 {
  %:echo 2³ 0Globa 3:0 %::users
  %:echo 2³ 0 $chr(32) $+ Max. 3:0 %::value
  %:echo 2ÀÄÄÄÄÄÄ3/lusers2 $+ ÄÄ2ÄÄ 3Ä 3ÄÄ 2úú3ú 2ú2ú3 ú
}
alias nique.lusers4 {
  %:echo 2³ 0 $chr(32) Loca 3:0 %::users
  %:echo 2³ 0 $chr(32) $+ Max. 3:0 %::value
}
