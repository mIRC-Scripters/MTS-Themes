alias whoizz {
  %:echo <pre><pre><pre><pre><pre><pre><pre><pre> 4(15Whois on <nick>4) <pre><pre><pre><pre><pre><pre><pre><pre>
  %:echo 2× Whois15:14  $+ $1 $+ 2/ $+ $2 [15 $+ $3- $+ 2]
}
alias whoiz { %:echo <pre><pre><pre><pre><pre><pre><pre><pre> 4(15Whois on <nick> Ended4) <pre><pre><pre><pre><pre><pre><pre><pre> }
alias not { %:echo 8• 4Notify:15 $1 $iif($2 != $null,4(15 $+ $2- $+ 4) 15is online.) | haltdef }
alias umode { %:echo 2Modes15:14 $1- | haltdef }
alias ctcpreply { if (LAGM !iswm $2) %:echo 2 $+ $1 $+ 's  -13  $+ $2 $+  2reply15:14 $3- }
alias unot { %:echo 8• 4Notify:15 $1 $iif($2 != $null,4(15 $+ $2- $+ 4) 15is offline.) | haltdef }
