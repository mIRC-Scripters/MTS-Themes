alias _onjoin.chan {
  %:echo 14�� $+ %::c1 $+ � $+ %::c1 $+ �15�14��� $+ $chr(3) $+ %::c1 $+ (00 $+ $1 $+  $+ $chr(3) $+ %::c1 $+ )
  %:echo 14�  $chr(3) $+ %::c1 $+ i $+ $chr(3) $+ %::c1 $+ n15f14o���� $+ $chr(3) $+ %::c1 $+ > $+ $chr(3) $+ %::c1 $+ . $+ $chr(3) $+ %::c1 $+ .15 $nick($1,0)
  %:echo 14�� $chr(3) $+ %::c1 $+ � $+ $chr(3) $+ %::c1 $+ �15�14�Ĵ��15@ $+ $chr(3) $+ %::c1 $+ > $+ $chr(3) $+ %::c1 $+ . $+ $chr(3) $+ %::c1 $+ .15 $nick($1,0,o)
  %:echo 14�� $chr(3) $+ %::c1 $+ � $+ $chr(3) $+ %::c1 $+ �15�14�Ĵ���15+ $+ $chr(3) $+ %::c1 $+ > $+ $chr(3) $+ %::c1 $+ . $+ $chr(3) $+ %::c1 $+ .15 $nick($1,0,v)
}
alias _end.topic {
  %:echo 14�� $chr(3) $+ %::c1 $+ s $+ $chr(3) $+ %::c1 $+ e15t14by�15 $2
  %:echo 14�� $chr(3) $+ %::c1 $+ � $+ $chr(3) $+ %::c1 $+ �15�14���
}
alias _w.start {
  echo -a addasasdasd
  %:echo  $+ $chr(3) $+ %::c1 $+ ��� 15��  $+ $chr(3) $+ %::c1 $+ ���������� 14������ $+ $chr(3) $+ %::c1 $+  � ������� 15� $+ $chr(3) $+ %::c1 $+  �� 14� $+ $chr(3) $+ %::c1 $+  �
  %:echo  $+ $chr(3) $+ %::c1 $+ �15 %::nick 14(15 $+ %::address $+ 14)
  %:echo  $+ $chr(3) $+ %::c1 $+ ��� 15�  $+ $chr(3) $+ %::c1 $+ ���� 14�� $+ $chr(3) $+ %::c1 $+  � ���� 15� $+ $chr(3) $+ %::c1 $+  �� 14� $+ $chr(3) $+ %::c1 $+  ������
  %:echo  $+ $chr(3) $+ %::c1 $+ ���14>15 name $+ $chr(3) $+ %::c1 $+ ;15 %::realname
}
alias _lusers.end {
  %:echo  $+ $chr(3) $+ %::c1 $+ �14 online��� $+ $chr(3) $+ %::c1 $+ :15 $2 users and $1 servers
  %:echo  $+ $chr(3) $+ %::c1 $+ ��[15 end luser
}
alias _lusers.start {
  %:echo  $+ $chr(3) $+ %::c1 $+ ��[15 $server $+ 's luser
  %:echo  $+ $chr(3) $+ %::c1 $+ �14 users���� $+ $chr(3) $+ %::c1 $+ :15 $1  $+ $chr(3) $+ %::c1 $+ (14 $+ $2 invisible $+ $chr(3) $+ %::c1 $+ )15 on $3 servers
}
