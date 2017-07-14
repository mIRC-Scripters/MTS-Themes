
alias daylight.w {
  %:echo 01┌─── ─ ──── 07─────01── ─ ──── ───── ─ ──── 07─────── ─── ─ ──
  %:echo 01│ %::nick 07< $+ %::address $+ 07>
  %:echo 01├─── ─ ── ──07─── ─01 ──── ─ ───── ─── ─  ──07──  ─── ─ ── ─── ── ─
  %:echo 01│ 01name07: %::realname
  if (%::chan) { 
  %:echo 01│ 01chans07: $replace(%::chan,@#,7@#,+#,7+#)
  }
  %:echo 01│ 01server07: %::wserver
  if (%::away) %:echo 01│ 01away07: %::away
  if (%::idletime) {
    %:echo 01│ 01idle07: %::idletime
    %:echo 01│ 01signed on07: %::signontime
  }
  %:echo 01└─ ── ─ ── ─07 ────01 ─ ──── ─ ─── ─ ───  ───07  ─ ────── ─ ── ─── ── ──
}
