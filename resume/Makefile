PDF_OUTPUT = ../frontend/public/resume_short.pdf
TEX_SOURCE = resume_short.tex

.PHONY: build clean

build:
	latexmk -pdf -interaction=nonstopmode -halt-on-error -outdir=. $(TEX_SOURCE)
	cp resume_short.pdf $(PDF_OUTPUT)

clean:
	latexmk -C -outdir=. $(TEX_SOURCE)
