package com.ssafy.pocketfolio.api.controller;

import com.ssafy.pocketfolio.api.dto.response.ItemCategoryListRes;
import com.ssafy.pocketfolio.api.dto.response.ItemRes;
import com.ssafy.pocketfolio.api.service.ItemService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@Log4j2
@RestController
@RequestMapping("/items")
@RequiredArgsConstructor
@Tag(name = "ItemController", description = "오브젝트(아이템) API")
public class ItemController {
    private final ItemService itemService;

    @Operation(summary = "오브젝트 카테고리 리스트 조회", description = "카테고리 번호 / 카테고리 이름 / 각 카테고리 별 마지막 페이지 번호", responses = {
            @ApiResponse(responseCode = "200", description = "회원 정보 조회 성공", content = @Content(schema = @Schema(implementation = List.class))),
            @ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근(페이지가 0 이하거나 전체 페이지를 초과할 경우 or 카테고리 이름이 잘못될 경우",
                    content = @Content(schema = @Schema(implementation = List.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = List.class)))
    })
    @GetMapping("/category")
    public ResponseEntity<List<ItemCategoryListRes>> findItemCategoryList() {
        log.debug("Controller: findItemCategoryList()");
        HttpStatus status;
        List<ItemCategoryListRes> result = new ArrayList<>();

        try {
            result = itemService.findItemCategoryList();
            status = HttpStatus.OK;
        } catch (Exception e) {
            log.error(e.getMessage());
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<>(result, status);
    }

    @Operation(summary = "오브젝트 리스트 조회", description = "category는 category 번호: 0이면 전체 / page는 페이지 번호", responses = {
            @ApiResponse(responseCode = "200", description = "회원 정보 조회 성공", content = @Content(schema = @Schema(implementation = List.class))),
            @ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근(페이지가 0 이하거나 전체 페이지를 초과할 경우 or 카테고리 이름이 잘못될 경우",
                    content = @Content(schema = @Schema(implementation = List.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = List.class)))
    })
    @GetMapping
    public ResponseEntity<List<ItemRes>> findItemList(@RequestParam long category, @RequestParam int page) {
        log.debug("Controller: findItemList()");
        HttpStatus status;
        List<ItemRes> result = new ArrayList<>();

        try {
            result = itemService.findItemList(category, page);
            status = HttpStatus.OK;
        } catch (IllegalArgumentException e) {
            log.error(e.getMessage());
            status = HttpStatus.NOT_FOUND;
        } catch (Exception e) {
            log.error(e.getMessage());
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<>(result, status);
    }

    @Operation(summary = "오브젝트 단건 조회", description = "오브젝트 번호로 단건 조회", responses = {
            @ApiResponse(responseCode = "200", description = "회원 정보 조회 성공", content = @Content(schema = @Schema(implementation = ItemRes.class))),
            @ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근", content = @Content(schema = @Schema(implementation = ItemRes.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(schema = @Schema(implementation = ItemRes.class)))
    })
    @GetMapping("/{itemSeq}")
    public ResponseEntity<ItemRes> findItem(@PathVariable long itemSeq) {
        log.debug("Controller: findItem()");
        HttpStatus status;
        ItemRes result = new ItemRes();

        try {
            result = itemService.findItem(itemSeq);
            status = HttpStatus.OK;
        } catch (IllegalArgumentException e) {
            log.error("검색하려는 itemSeq(" + itemSeq + ") 없음");
            status = HttpStatus.NOT_FOUND;
        } catch (Exception e) {
            log.error(e.getMessage());
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<>(result, status);
    }

    @PostMapping
    private ResponseEntity<Boolean> insertItem(@RequestPart("category") String category, @RequestPart(value = "files") List<MultipartFile> files) {
        log.debug("[POST] Controller - insertItem");
        Boolean response = null;
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;

        try{
            response = itemService.insertItem(category, files);
            status = response != null ? HttpStatus.CREATED : HttpStatus.INTERNAL_SERVER_ERROR;
        } catch (Exception e) {
            log.error(e.getMessage());
        }

        return new ResponseEntity<>(response, status);
    }
}
