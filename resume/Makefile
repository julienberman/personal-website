PDF_OUTPUT = ../frontend/public/resume.pdf
RESUME ?= technical
TEX_SOURCE = resume_$(RESUME).tex
PDF_SOURCE = resume_$(RESUME).pdf

.PHONY: build clean

build:
	latexmk -pdf -synctex=1 -interaction=nonstopmode -halt-on-error -outdir=. $(TEX_SOURCE)
	cp $(PDF_SOURCE) $(PDF_OUTPUT)

clean:
	latexmk -C -outdir=. $(TEX_SOURCE)
