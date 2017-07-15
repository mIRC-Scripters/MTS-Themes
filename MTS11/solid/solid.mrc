alias theme.stwhois { 
  %:echo  $+ %::c2 $+ ___________________________________________________________
  %:echo  $+ %::c2 $+ w $+ %::c1 $+ hois : %::nick
  %:echo  $+ %::c2 $+ ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
  %:echo  $+ %::c2 $+ n $+ %::c1 $+ ame : %::realname
  %:echo  $+ %::c2 $+ a $+ %::c1 $+ ddress : %::address
}
alias theme.idle {
  %:echo  $+ %::c2 $+ i $+ %::c1 $+ dle : $duration(%::idletime)
  %:echo  $+ %::c2 $+ s $+ %::c1 $+ ign on : %::signontime
}

