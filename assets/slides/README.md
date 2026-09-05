# Presentation slides

Drop a speaker's slide PDF into this folder using the exact filename
listed below for their talk. The Timetable page checks for these files
automatically and shows a "📄 Slides" link under the speaker's name the
moment the file exists — no other change is needed.

Currently this folder is empty, so no Slides links show anywhere yet.

Expected filenames (one PDF per talk):

- jan-sobczyk.pdf
- kajetan-niewczas.pdf
- hemant-prasad.pdf
- rwik-dharmapal-banerjee.pdf
- xianguo-lu.pdf
- natalie-jachowicz.pdf
- alexandra-trettin.pdf
- clarence-wret.pdf
- raul-gonzalez-jimenez.pdf
- joanna-sobczyk.pdf
- alma-cavallin.pdf
- alexis-nikolakopoulos.pdf
- paloma-casale.pdf
- cesar-jesus-valls.pdf
- mathias-el-baz.pdf
- luis-bonilla.pdf
- beata-kowal.pdf
- krzysztof-graczyk.pdf
- cezary-juszczak.pdf
- qiyu-yan.pdf

To add a new talk later (a speaker not yet in this list), add a
`data-slides="assets/slides/<name>.pdf"` attribute to that speaker's
`<li class="agenda-item talk">` entry in `index.html`, using the same
lowercase-hyphenated naming pattern.

Note: this check only works when the page is served over HTTP (e.g.
GitHub Pages) — opening `index.html` directly as a local file may not
show Slides links even once a PDF is added, due to browser restrictions
on local file access.
