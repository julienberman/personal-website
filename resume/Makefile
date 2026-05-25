PDF_OUTPUT = ../frontend/public/resume_technical.pdf
TEX_SOURCE = resume_technical.tex

.PHONY: build clean

build:
	latexmk -pdf -interaction=nonstopmode -halt-on-error -outdir=. $(TEX_SOURCE)
	cp resume_technical.pdf $(PDF_OUTPUT)

clean:
	latexmk -C -outdir=. $(TEX_SOURCE)
