alias whos.start {
  %:echo $+(%::pre,,%::c3,----------,%::c1,[ %::nick)
  %:echo $+(%::pre,,%::c3,----,%::c1,|,%::c4 %::address)
  %:echo $+(%::pre,,%::c3,----,%::c1,|,%::c4 %::realname)
}
alias whos.idlesign { %:echo $+(%::pre,,%::c3,----,%::c1,|,%::c4 Idle,%::c3,:,%::c4 $duration(%::idletime) ,%::c3,-,%::c4 Signed On,%::c3,:,%::c4 %::signontime) }